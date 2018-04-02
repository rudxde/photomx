using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Net;
using System.Threading;

namespace Artnet
{
    public class ArtnetSender
    {
        private UdpClient udpClient;
        public int universe { get; }
        private IPEndPoint ipEndPoint;
        public String ipEndPointStr { get; }
        public ArtnetSender(String IpEndpoint, UdpClient _udpClient, int _universe)
        {
            IPAddress ipAddress = Dns.Resolve(IpEndpoint).AddressList[0];
            ipEndPoint = new IPEndPoint(ipAddress, 6454);
            ipEndPointStr = IpEndpoint;
            universe = _universe;
            udpClient = _udpClient;
        }

        public void send(Dmxdata[] universes)
        {
            try
            {
                byte[] ArtnetData = universes[this.universe].getArtnetData(0, 0, (byte)this.universe);
                udpClient.Send(ArtnetData, ArtnetData.Length, ipEndPoint);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}