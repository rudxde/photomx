export interface IArtnetDefinition {
    artnet: number;
    subnet: number;
}

export interface IArtnetPatch extends IArtnetDefinition {
    startAdress: number;
    length?: number;
}
