export class Project {
  public fundsRaised = 0;
  constructor(
    public name: string,
    public manager: string,
    public description: string,
    public fundsGoal: number,
    public fundsUse: string,
    public rewards: string) { }
}
