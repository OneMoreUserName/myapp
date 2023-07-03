import { defineStore } from "pinia";

interface ClickerState {
    count: number,
    _somePrivateVariable: false
}

export const useClickerStore = defineStore('clicker', {
    state: (): ClickerState => ({
        count: 0,
        _somePrivateVariable: false
    }),

    getters: {
        somePrivateVariable(): boolean {
            return this._somePrivateVariable;
        }
    },

    actions: {
        setSomePrivateVariable(value: boolean) {
            this._somePrivateVariable = value;
        }
    }

})

