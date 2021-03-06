import { Action } from '../action';
import { Store } from '../store';
import { ensureStoreMetadata } from '../internals';

describe('Action', () => {
  it('supports multiple actions', () => {
    class Action1 {}
    class Action2 {}

    @Store({})
    class BarStore {
      @Action([Action1, Action2])
      foo(state) {
        state.foo = false;
      }
    }

    const meta = ensureStoreMetadata(BarStore);
    expect(meta.actions['Action1']).toBeDefined();
    expect(meta.actions['Action2']).toBeDefined();
  });
});
