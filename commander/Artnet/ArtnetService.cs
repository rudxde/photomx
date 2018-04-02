namespace Artnet
{
    public class ArtnetService
    {
        public Dmxdata[] universes;
        public ArtnetClientHolder clientHolder;
        public ArtnetService()
        {
            universes = new Dmxdata[265];
            for (int i = 0; i < universes.Length; i++)
            {
                universes[i] = new Dmxdata();
            }
            clientHolder = new ArtnetClientHolder(universes);
        }
    }
}
