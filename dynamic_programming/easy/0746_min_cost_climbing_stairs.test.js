import minCostClimbingStairs from './0746_min_cost_climbing_stairs';

test('minCostClimbingStairs:1', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
});

test('minCostClimbingStairs:2', () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});
