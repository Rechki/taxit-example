import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
// import { BootstrapContext } from '@angular/platform-server';

export default function bootstrap(context: BootstrapContext) {
    return bootstrapApplication(AppComponent, {
        ...config,
        // context goes here, but NOT inside config
        // It is a top-level property for bootstrapApplication
        context,
    } as any);  // Add this cast if TS still complains
}
