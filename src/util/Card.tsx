
export interface Post {
  id: number
  name: string
  stats: Stat[]
}

export interface Stat {
  base_stat: number
}

export class CardClass {
  name: string;
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;
  constructor(post:Post) {
    this.name = post?.name;
    this.hp = post?.stats[0].base_stat;
    this.atk = post?.stats[1].base_stat;
    this.def = post?.stats[2].base_stat;
    this.spatk = post?.stats[3].base_stat;
    this.spdef = post?.stats[4].base_stat;
    this.spd = post?.stats[5].base_stat;
  }

  // Puedes agregar métodos adicionales aquí si es necesario
}

