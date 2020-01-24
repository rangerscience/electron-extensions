class Event {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  hasListener(listener) {
    return this.listeners.indexOf(listener) !== -1;
  }

  removeListener(listener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1)
    }
  }

  emit(...args) {
    for (const listener of this.listeners) {
      listener(...args);
    }
  }
}

module.exports = {
  Event: Event
}
