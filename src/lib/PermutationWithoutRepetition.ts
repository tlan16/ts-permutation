import assert from 'assert';

class Stage {
  /**
   * 0: swap with self, aka no change
   * >0: swap initialValue[number] with initialValue[number+swapIndex]
   */
  #swapToIndex: number = 0;
  public readonly number: number = 0;
  private initialValue: ReadonlyArray<number>;
  public value: ReadonlyArray<number>;

  public constructor(number: Stage['number'], initialValue: Stage['initialValue']) {
    assert(number >= 0, 'Stage number must be equal or grater than zero.')
    assert(initialValue.length > 0, 'initial stage value must be an non-empty array of number.');
    this.number = number;
    this.initialValue = initialValue;
    this.value = [...this.initialValue];
  }

  public get result(): ReadonlyArray<number> {
    if (this.swapToIndex === 0) {
      // console.log('swap to index:', this.swapToIndex);
      // console.log('result:', this.value);
      return this.value;
    }
    // console.log('swap to index:', this.swapToIndex);
    assert(this.swapToIndex <= this.maxSwapToIndex, `value of swap to index (${this.swapToIndex}) must be less than ${this.maxSwapToIndex + 1}.`);
    this.swap();
    // console.log('result:', this.value);
    return this.value;
  }

  public get maxSwapToIndex(): number {
    const n = this.initialValue.length;
    return n - this.number - 1;
  }

  public get isAtMaxSwapToIndex(): boolean {
    return this.swapToIndex === this.maxSwapToIndex;
  }

  public get swapToIndex(): number {
    return this.#swapToIndex;
  }

  public reset(value: Stage['initialValue']) {
    this.initialValue = value;
    this.value = [...value];
    this.resetSwapToIndex();
  }

  public bumpSwapToIndex(): void {
    this.#swapToIndex++;
  }

  public resetSwapToIndex(): void {
    this.#swapToIndex = 0;
  }

  private swap(): void {
    const newValue: number[] = [...this.initialValue];
    const position1 = this.number;
    const position2 = this.number + this.swapToIndex;
    newValue[position1] = this.initialValue[position2];
    newValue[position2] = this.initialValue[position1];
    this.value = newValue;
  }
}

export default class PermutationWithoutRepetition {
  private readonly n: number;
  public readonly result: ReadonlyArray<number>[] = [];
  private readonly stages: ReadonlyArray<Readonly<Stage>>;
  private finalStageValue: ReadonlyArray<number>;

  public constructor(n: number) {
    assert(n > 0 && Number.isSafeInteger(n), 'n must be a positive integer.');
    this.n = n;
    this.stages = this.computeStages();
    console.log('initial stages:', this.stages);
  }

  private getParentStage(stage: Readonly<Stage>): Readonly<Stage> {
    assert(stage.number > 0, `the stage pass to getParentStage must have stage number (${stage.number}) greater than zero.`);
    return this.stages[this.stages.indexOf(stage) - 1];
  }

  private getChildStage(stage: Readonly<Stage>): Readonly<Stage> {
    const childIndex = this.stages.indexOf(stage) + 1;
    assert(childIndex < this.stages.length, `the child index (${childIndex} is outside this stages.)`);
    return this.stages[childIndex];
  }

  private getNextStage(stage: Readonly<Stage>, from?: 'up' | 'down'): Readonly<Stage> {
    const isLastStage = stage.number === this.stages.length - 1;
    if (isLastStage) {
      switch (from) {
        case undefined:
          if (stage.isAtMaxSwapToIndex) {
            const parent = this.getParentStage(stage);
            parent.bumpSwapToIndex();
            return this.getNextStage(parent, 'down');
          }
          stage.bumpSwapToIndex();
          return stage;
        case 'up':
          return stage;
        case 'down':
          assert(false, `should never reach here, because can not be from 'down' and is last stage.`)
      }
    }

    if (from === 'down' && stage.swapToIndex > stage.maxSwapToIndex) {
      const parent = this.getParentStage(stage);
      parent.bumpSwapToIndex();
      return this.getNextStage(parent, 'down');
    }
    const child = this.getChildStage(stage);
    child.reset(stage.result);
    return this.getNextStage(child, 'up');
  }

  public calculate(stage: Readonly<Stage> = this.stages[this.stages.length - 1]): void {
    const newResult = stage.result;
    console.log('new result:', newResult);
    this.result.push(newResult);
    console.log(stage.result, stage.swapToIndex)
    if (newResult.toString() === this.finalStageValue.toString()) {
      console.log('Finished.')
      return;
    }
    this.calculate(this.getNextStage(stage));
  }

  private computeStages(): PermutationWithoutRepetition['stages'] {
    const initialValue = [...Array(this.n).keys()].map(n => n + 1);
    this.finalStageValue = [this.n, ...initialValue.slice(0, this.n - 1)];
    return [...Array(this.n - 1).keys()].map(n => new Stage(n, initialValue));
  }
}
