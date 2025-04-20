import { defineStore,  } from "pinia";

interface State {
    // section
    sections: string[], // list of sections
    section: string, // current section
    sectionVisible: number // count of visible sections
}

const useStore = defineStore("main", {
    state: (): State =>  ({
        // section
        sections: [],
        section: "",
        sectionVisible: 0
    }),
    getters: {},
    actions: {
        pushSection(section: string) {
            this.sections.push(section);
        },
        popSection(section: string) {
            const index = this.sections.indexOf(section);
            if (index > -1) {
                this.sections.splice(index, 1);
            }
        },
        setSection(section: string) {
            this.section = section;
        },
        addVisible() {
            this.sectionVisible += 1;
        },
        minusVisible() {
            this.sectionVisible -= 1;
        }
    }
});

export default useStore;