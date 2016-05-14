/**
 * This file is the main entry point for the entire app.
 *
 * If the application is being bundled, this is where the bundling process
 * starts.  If the application is being loaded by an es6 module loader, this
 * is the entry point.
 *
 * Point Webpack or SystemJS to this file.
 *
 * This module imports all the different parts of the application:
 * - 3rd party Libraries and angular1 module
 * - Services
 * - Components
 * - Submodules
 * - Top-level states
 * - UI-Router Transition Hooks
 */

// Import the angular1 module
import './ngmodule';

// Import CSS (WebPack will inject it into the document)
import 'angular-material/angular-material.css';
import 'normalize.css';

// Import the service that manages the user's application preferences, and the Authentication service
//import '../services/appConfig';
//import '../services/auth';

// Import the fake REST APIs (for Contacts, Folders, Messages)
// These register themselves as angular services
//import '../services/dataSources';

// Import the submodules that make up the main subsections of the application
// Each submodule registers its own states/services/components
import '../app.module';
import '../mailbox/mailbox.module';
import '../contacts/contacts.module';

// Import the components
import '../components/components.module';
