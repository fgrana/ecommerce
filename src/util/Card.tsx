export class CardClass {
  name: string;
  total: number;
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;
  constructor(name: string, total:number, hp:number, atk: number, def: number, spatk: number, spdef: number, spd: number) {
    this.name = name;
    this.total = total;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spatk = spatk;
    this.spdef = spdef;
    this.spd = spd;
  }
}

