import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {
  it("Is the props course working", () => {
    const course = {
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 10,
    };
    const wrapper = shallowMount(CourseItem, {
      props: {
        course,
      },
    });
    expect(wrapper.find("h2").text()).toBe(course.name);
    expect(wrapper.find("p").text()).toBe(course.description);
  });

  it("it apply isFull when enrollment is Full", async () => {
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
    const wrapper = shallowMount(CourseItem, {
      props: {
        course,
      },
    });

    const enrollmentFull = "full";
    await wrapper.setData({ course });
    expect(wrapper.find("span").text()).toBe(enrollmentFull);
  });

  it("show button Add Course when isFull = false and isAdded = true", async () => {
    const wrapper = shallowMount(CourseItem); 
    const buttonadd = "Add Course";

    expect(wrapper.vm.isAdded).toBe(false);
    expect(wrapper.vm.isFull).toBe(false);
    await wrapper.setData({ isAdded: false, isFull: false });
    expect(wrapper.find("button").text()).toBe(buttonadd);
    });

    it("emits addCourse and course.id when the button add Course is clicked", async () => {

        const course = {
            name: "Vue.js",
            description: "The Progressive JavaScript Framework",
            hours: 50,
            credits: 3,
            location: "Online",
            instructor: "John Doe",
            id: 1,
            enrollment: 10,
          };
          const wrapper = shallowMount(CourseItem, {
            props: {
              course,
            },
          });
        await wrapper.find("[data-testid='addCourse']").trigger("click");
        expect(wrapper.emitted("addCourse")[0]).toEqual([course.id]);
        console.log(wrapper.emitted().sendAdd);
    });

    // it("emits removeCourse and course.id when the button add Course is clicked", async () => {

    //     const course = {
    //         name: "Vue.js",
    //         description: "The Progressive JavaScript Framework",
    //         hours: 50,
    //         credits: 3,
    //         location: "Online",
    //         instructor: "John Doe",
    //         id: 1,
    //         enrollment: 20,
    //       };
    //       const wrapper = shallowMount(CourseItem, {
    //         props: {
    //           course,
    //         },
    //       });
        
    //     await wrapper.find("[data-testid='removeCourse']").trigger("click");
    //     expect(wrapper.emitted("removeCourse")[0]).toEqual([course.id]);
    //     console.log(wrapper.emitted().sendRemove);
    // });

});
