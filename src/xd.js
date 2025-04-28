let pipe = {
    asleep: false,
    isAsleep() {
      return this.asleep;
    },
    feel(estado) {
      return estado;
    },
    sip(sentimiento) {
      console.log("Sorbito... siento que estoy", sentimiento);
    }
  };
  
  let cup = {
    vacía: true,
    isEmpty() {
      return this.vacía;
    },
    refill(bebida) {
      console.log(`Recargando la taza con ${bebida}...`);
      this.vacía = false;
    }
  };
  
  
  let vueltas = 1;
  
  while (!pipe.isAsleep() && vueltas > 0) {
    if (cup.isEmpty()) {
      cup.refill("café");
    }
  
    pipe.sip(pipe.feel("más que parchado, parchado"));
    console.log("Hello, world!");
  
    vueltas--;  
  }