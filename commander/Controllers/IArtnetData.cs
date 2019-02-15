public class ArtnetData
{

    public ArtnetData(IRawArtnetData rawArtnetData)
    {
        this.artnet = rawArtnetData.artnet;
        this.subnet = rawArtnetData.subnet;
        string[] dataStr = rawArtnetData.data.Split(",");
        if(dataStr.Length != 512) {
            throw new System.Exception("");
        } 
        this.data = new byte[dataStr.Length];
        for(int i = 0; i < dataStr.Length; i++) {
             byte.TryParse(dataStr[i], out this.data[i]);
        }
    }
    public int artnet { get; set; }
    public int subnet { get; set; }
    public byte[] data { get; set; }
}
public class IRawArtnetData
{
    public int artnet { get; set; }
    public int subnet { get; set; }
    public string data { get; set; }
}
