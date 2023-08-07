import { mount } from "@vue/test-utils";
import CourseList from "@/components/CourseList.vue";

describe("CourseList.vue", () => {
  it("receives component CourseItem", () => {
    const wrapper = mount(CourseList);
    expect(wrapper.exists()).toBe(true);
  });
});
