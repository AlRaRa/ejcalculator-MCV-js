Este tiene una factory para ir creando el el comando de lo que se clickea

El archivo calculator.js es el patron comando pero en script

Otra opcion para volver atras seria en el execute del servicio guardar el estado del current en command.undo = this.current
asi despues el undo seria
this.current = lastCommand.undo;
