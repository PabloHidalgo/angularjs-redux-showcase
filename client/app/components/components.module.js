import { ngmodule } from '../bootstrap/ngmodule';

//import { emailComponent } from './email/email';
import { emailListComponent } from './email-list/email-list.component';
import { emailListItemComponent } from './email-list-item/email-list-item.component';
import { emailNotificationBarComponent } from './email-notification-bar/email-notification-bar.component';

ngmodule
//.component('email', emailComponent)
.component('emailList', emailListComponent)
.component('emailListItem', emailListItemComponent)
.component('emailNotificationBar', emailNotificationBarComponent);
