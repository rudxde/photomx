using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Net;
using System.Threading;

namespace Artnet
{
    public class ArtnetClientHolder
    {
        private List<ArtnetSender> clients;
        private UdpClient udpClient;
        private bool running;
        private Dmxdata[] universes;
        public ArtnetClientHolder(Dmxdata[] _universes)
        {
            universes = _universes;
            clients = new List<ArtnetSender>();
            udpClient = new UdpClient(6454);
            running = true;
            (new Thread(SendArtnet)).Start();
        }
        private void SendArtnet()
        {
            while (running)
            {
                lock (clients)
                {
                    foreach (ArtnetSender client in clients)
                    {
                        client.send(universes);
                    }
                }
                Thread.Sleep(16);
            }
        }
        public void addClient(String IpEndpoint, int universe)
        {
            lock (clients)
            {
                ArtnetSender newSender = new ArtnetSender(IpEndpoint, udpClient, universe);
                clients.Add(newSender);
            }
        }
        public void removeClient(String IpEndpoint, int universe)
        {
            lock (clients)
            {
                clients.Remove(
                    clients.Find(item =>
                        item.universe == universe && item.ipEndPointStr.Equals(IpEndpoint)
                    ));
            }
        }
        public IEnumerable<ClientListData> ListClients()
        {
            lock (clients)
            {
                foreach (ArtnetSender client in clients)
                {
                    yield return new ClientListData() { ip = client.ipEndPointStr, universe = client.universe };
                }
            }
        }
    }
    public class ClientListData
    {
        public string ip { get; set; }
        public int universe { get; set; }
    }
}
