export interface Name {
  common: string;
  official: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface CountryDto {
  name: Name;
  flags: Flags;

}export interface Country {
  name: string;
  flag: string;

}

