using System;

namespace Artnet
{
    public class Dmxdata
    {
        public byte[] DMXdata { get; set; }
        public Dmxdata()
        {
            DMXdata = new byte[512];
        }
        public byte[] getArtnetData(byte net, byte subnet, byte universe)
        {
            byte[] Artnetdata = new byte[530];
            Array.Copy(DMXdata, 0, Artnetdata, 18, 512);
            Artnetdata[0] = (byte)'A';
            Artnetdata[1] = (byte)'r';
            Artnetdata[2] = (byte)'t';
            Artnetdata[3] = (byte)'-';
            Artnetdata[4] = (byte)'N';
            Artnetdata[5] = (byte)'e';
            Artnetdata[6] = (byte)'t';
            Artnetdata[7] = 0x0;
            // Opcode
            Artnetdata[8] = 0x0;
            Artnetdata[9] = 0x50;
            // Version
            Artnetdata[10] = 0x00;
            Artnetdata[11] = 0x0E;
            // Sequence
            Artnetdata[12] = 0x00;
            // physical
            Artnetdata[13] = 0x00;
            // high : subnet | low: universe
            Artnetdata[14] = (byte)((subnet << 4) | (universe & 15));
            // net
            Artnetdata[15] = net;
            // length
            Artnetdata[16] = 0x01;
            Artnetdata[17] = 0x00;
            return Artnetdata;
        }
    }
}
