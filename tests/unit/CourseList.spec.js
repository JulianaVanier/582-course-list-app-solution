import { mount } from "@vue/test-utils";
import CourseList from "@/components/CourseList.vue";

describe("CourseList.vue", () => {
  it("receives component CourseItem", () => {
    const wrapper = mount(CourseList);
    expect(wrapper.exists()).toBe(true);
  });

  it("emit event when click on course", async () => {
    const wrapper = mount(CourseList);
    const course = {
      name: "Test.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 20,
    };

    await wrapper.vm.$emit("addCourse", course.id);
    expect(wrapper.emitted("addCourse")[0]).toEqual([course.id]);
  });

});

