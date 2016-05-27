// Importamos el lanzador de la aplicacion. Como no queremos que este pegada a un unico ambiente de ejecucion, sino que este abierto a cualquiera,
// Con platform-browser-dynamic le damos esta facilidad al lanzador.
import { bootstrap }    from '@angular/platform-browser-dynamic';

// Importacion del componente. Como es uno solo que se tiene aca, el import esta dado una sola vez.
// from './app.component' indica que vendra del fichero app.component.ts (la extension no es requerida)
import { AppComponent } from './app/app.component';

// Lanzamiento de la aplicacion usando el web component AppComponent.
bootstrap(AppComponent);
