namespace Artnet
{
    public class ArtnetService
    {
        public Dmxdata[,] universes;
        public ArtnetClientHolder clientHolder;
        public ArtnetService()
        {
            universes = new Dmxdata[265, 265];
            for (int i = 0; i < universes.GetLength(0); i++)
            {
                for (int ii = 0; ii < universes.GetLength(1); ii++)
                {
                    universes[i,ii] = new Dmxdata();
                }
            }
            clientHolder = new ArtnetClientHolder(universes);
        }
    }
}
