let ParentClass = class ParentClass {
    makeNestedClass() {
        var _class;

        let NestedClass = ParentDecorator(_class = class NestedClass {}) || _class;
    }
};
export { ParentClass as default };