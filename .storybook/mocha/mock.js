export const storiesOf = function storiesOf() {
  var api = {};
  var story;
  api.add = (name, func)=> {
    story = func();
    return api;
  };
  api.addWithInfo = (name, func)=> {
    story = func();
    return api;
  };
  // api.addDecorator = (name, func) == TypeError: func is not a function
  api.addDecorator = (func)=> { // == TypeError: Cannot read property 'kind' of undefined
    func();
    return api;
  };
  return api;
};
export const action = () => {};

export const linkTo = () => {};

export const specs = (spec) => {
  spec()
};

export const describe = describe;
export const it = it;
