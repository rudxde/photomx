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
        public int artnet { get; } 
        public int subnet { get; } 
        private IPEndPoint ipEndPoint;
        public String ipEndPointStr { get; }
        public ArtnetSender(String IpEndpoint, UdpClient _udpClient, int _artnet, int _subnet)
        {
            IPAddress ipAddress = Dns.Resolve(IpEndpoint).AddressList[0];
            ipEndPoint = new IPEndPoint(ipAddress, 6454);
            ipEndPointStr = IpEndpoint;
            udpClient = _udpClient;
            this.artnet = artnet;
            this.subnet = subnet;
        }

        public void send(Dmxdata[,] universes)
        {
            try
            {
                byte[] ArtnetData = universes[this.artnet, this.subnet].getArtnetData((byte)this.artnet, (byte)this.subnet);
                udpClient.Send(ArtnetData, ArtnetData.Length, ipEndPoint);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}