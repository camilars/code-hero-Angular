export type Characters = {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: Comics;
  series: Series;
};

export type ResponseCharacters = {
  data: Data;
}

export type Data = {
  results: Characters[];
  total: number;
  count: number;
};

export type Comics = {
  items: {
    name: string;
  }[];
};

export type Series = {
  items: {
    name: string;
  }[];
};


