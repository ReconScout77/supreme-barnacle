export class Project {
  public fundsRaised: number;
  public percentageComplete: number;
  constructor(
    public name: string,
    public manager: string,
    public description: string,
    public fundsGoal: number,
    public fundsUse: string,
    public rewards: string) {

      this.fundsRaised = 0;
      this.percentageComplete = (this.fundsRaised / this.fundsGoal) * 100;
     }

     addFunds(money: number) {
       this.fundsRaised += money;
     }

     percentageCalc() {
       this.percentageComplete = (this.fundsRaised / this.fundsGoal) * 100;
     }
}
