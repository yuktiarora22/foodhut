import { FilterByRatingPipe } from './filter-by-rating.pipe';

describe('FilterByRatingPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByRatingPipe();
    expect(pipe).toBeTruthy();
  });
});
