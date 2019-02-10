import { mockStore } from "./mockStore";
import { loginAction } from "../redux/actions/authAction";

describe("loginAction", () => {
  it("handles changing a purchase status and fetches all purchases", async () => {
    const store = mockStore();
    await store.dispatch(loginAction({user: {}}));
    const actions = store.getActions();
    expect(actions).toEqual([{"data": {"user": {}}, "type": "LOGIN"}]);
  });
});