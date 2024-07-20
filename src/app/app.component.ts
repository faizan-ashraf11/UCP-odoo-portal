import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LoginService } from './services/login.service';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NotificationService } from './services/notification.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from './modales/about-us/about-us.component';
import { ContactUsComponent } from './modales/contact-us/contact-us.component';
import { FeedbackComponent } from './modales/feedback/feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , NzIconModule , NzBadgeModule , NzAvatarModule , RouterLink , NzDropDownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: []
})
export class AppComponent implements OnInit {

  uniName: any = "University of Central Punjab";
  logoAddress: any = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAt1BMVEX////tHCTrAAD7+/33+PvvSUr09fn85+fx8vf2pqbwZWTuRkb98/PxbW/s7fTk5vD72dmRmMPf4e3X2unN0OP97OwAEYzEyN+ZoMe/w90AAIn4u7y4vdg5Sp5oc7GzuNWmrM5gbK7wXV4AIpHtERqCirzzh4lQXqf2r68RLpSJkcB6grhJWKRyfLXsAA0AHI84Q5slO5jyfHzuLjIcNZfuO0D5x8dMUaAAAHnvUlX1mZw1Npb1kZLRiBahAAASlElEQVR4nO1cC1ejuhbONAyiR0NJYhMYHkGKyMuCVnucmf//u24SqFYt7Zw5ts65i2+tcYBSmo/s7Fd2AsCIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNG/Drg+sAwojqixme25V8CV47ZHRHGnDIpPrc5/wooTq3uiDi8oMj6L3eMVabdASpJUbCemGV+Xot+E4YcLShLCs0AV1bZkYEsXHAITPrJzftHMBwnMqDIsD4jK5wKqsmIOMooCD3DdZVywNanNvOXYPC69CJAAlef4lZEmKh2G05IOAVOS8KKABTFcPeD/gSgVQRWIcCZ0KdWJltOTNkPZhiqHgoKUMQWiPKMfG5Dd0N0GquMgVgaVul0V902jITPhYUCLk/xgsJGfiQCQWn0eY3dCYKI19kSP0eW5xrpSuhBYfhZkmeODWhSEhuIBOKEATNMIXCW9I+zpVgKvxVmzPeYOkUNt5cC0LjvKWATguWhyQpq2JUnO8UArJFKLYjd1Z8ka3I0gEggZLAfAlRassysTRwI4Hs7aUrW3AVpQmER24B5xGKQsj/G+MRSAfOFMil1DoTQ1yC0d36H+MCV+g4EK3Vm17nWdejQTd0P1TNOrnoEJ7KHfvl7zooWnrJEEMOy9eWDavr5PWTJXvBbZVPq/I1yghayMWWRkPAZtW1kbpoWZyZbTwphhysb2NWKfa4uMGwTlH9bcvTLEQBos/ERRMTlaRwEVRbWdR3G2aoJ4lQw/Nx7puNbWBqlNMcAps1nawIkCGBBbQDSONSgFJD+5WJJpA6LiL40HViYiaLOslLQl4tu4tKVdNiimX/sxr+DkLqYehxAZ5FahBKhxN5ynbLk7osSmD6ePx/bjNdVyNfmBTuszhAgnnPklr8D4pUaJTx3TexLY0OV64hEWXaO5TNOn6abpxYVYVW6PR1UFgZaZevxYn6W90lKKuoCGHEu1pcMETrsrWI+/Tp9c8VmqTSY+hBiTMPls+BB/knyFlVIZIsSELEOUdzMIe8V7HsysgdIugy7IAEYef3yAW52G6nDwMdktYyxL61Fr3CNKibb1Os2MqpL4tnaF+11OomIjBA+g8zfIaB1icRyfUF0rtl7bCcjQWevFbIdo2oWkqMraVFq0SLxkncXrDAcuneQDADpzOn7EsruNcMsj3DE/SOHbeEyVnoH1532gTQejk12kAFuU+PuAREx/bZhUn2I+Mh+mkmDChsG6n7WiOqhNMX5oyRzMh2kg7NMfxWyuFxljEYWEOExydhUvj8SZ7wfJIZI8dC904dzSebqbPhhZaC1MeR5SX0ZFNAwPaaXJupYqHfa9KbCKYZf5fQvRebsYvhpliNDOWDxwBEOxFR2+VGTUWmK5c+buLcphTNots/Pn8lcDj7OFLNIUkqJI20Mj1dH5WKlbSFkz/SnqTMciJy99MzT+eBdUPmZNkV2K/xldmQ7Y/l5i1mvvpx0WJFeT17ITM6G2QAnYcr0irIK5ZuhzrEIYRWzW0G+6EZ/FA/f+n2ySWYXmz6egVCldkn1t/vBjR6AmXo5l3SCTrZINXzr6fxxk8z3h7PhcWPEWa9ErNTL6FGsJoMWIU7erl1ba4d9+/Zler5J5tvlw91w39hNJ65i0Uj5LcIjaGdRhCkFOPW6foHODs3z/eLy8hUZcHN2Mnw7DfQgFFLeSN1kh85uyBgY1nXVcNvuhcwVO37z9B2Zb9c7dADket4AC8qDmB3cB3C56nvMV1kWaynAfNDwg21kTqa7xgKKC/VUM25UyurQYmYySJQKIzXXqtMQO6PC92T2gAXq6VYp9El68DRa1grJA3UvmPCdv/eezOP3YXUmAUudCpDOq+GmTfBxrR5AxNumoFjLgCV2+x2SzMkbBfC0QwEAFTLrriZ1lldRdHDDCSESzSzUv4PT3fduIXO1mwwoWvVXeLUMv8mPXQPyAyDUHyx0XGvs6ZjfIWMlqmsM2wCs8pa77/23oO3KN7XHIYHqPXf/BhmQ5vo/kc8qhg6bCyjSeJmEaeeU7euY3yKDPPVUty2ViJkGgAfT0JZvA1uEsSZj7HAwO/wOGRCrx0JpM6FNnAhQ/1AZzijIBLWMTh8zse/23yJDPaRiAUh4VrUc4OhQrgATTtaGTifK4V6b9ltkgAyhEYuKIBaRf0jlLEUYu2mrpQzulTLw/eyf2hmFNAMG5Y6Pul88CKz1WzK7wN/dn99+vD6ZvnE0v+8vbiK5rapvDEpkNH2gbIApONFeTE+q3tcqVpNzoMg8XN48nZ9dKTLn52JvWYbZqkjADvNCuDQ9zIjxPW+RtEHo9DMR2Z77UewQpMicTB6eHp4mN9rRpCzc9xZgXcq/dk6ggcmBKlKIADQqyizRL046/3vuR3IAF+Z0AsH53eT2fgoUGdeB9d4QMtLepsVwEef1YRSziZCN2HN9zB5phpTGws9sRUZqggeVnJVkeCnfu9gT4JNAGcwoXyyrkh+kZ1Dt0wgzZOFuSmVHClMhmnFJJu7JdIlzSUZIMnHqiZ3ftXVUw2vcc/743IYcAlxw7lO3Gyz1bisTB8YQmRAlu8ebFFD1n+weaKo6go83NmTF06yqYoR1iQjYGQZSUAfWEJnSTuKdLmRf20WEcNI6zPIPV8+wqBmzCYtEqY2l6QwPYyuK3fCZjLrylkzmZP7wyzAKHSc5eViXJY+iD88HGpVvp5zYtOpeFBbDkkyDEMfPZB5BT2YqtfOaDM13JMehULEFyqUXCNWM4McrtCg1cd0E+bJz/0k0TIYFIVj3DHi6v+nIPD7cn6zJhFYe7BCeSM/JVRGXluAghgbaNjAxWxeKUHeIDOLOaoPM+c/JNTz9enl6qyYBFJlUkkHLrCwHg2JXZ0mR11ZxyY6Qp2UD88qALcNyuUEGgG+Tq7uvV5KSPPbXZPI2zFSB3fZndFlnA8LjzNMOkTELj7+IWa4t7OXD5LbLmeEq7ckkFS3y5YASoNVxZ2gGyTgz7vZkOBBJrZp1eae1meHmoQ3CngxL82ZAI7IjTzfRAVl+TQawqiVQZ/XkHydR+vwXyLhHJkMGyg42yIRCnqN0ISxgSTIk6yrQ6xcywQCZ6MhlAEN2ZrNnOidOBDU2TDNqQ61kUbaXDBT7I/IPBeLbG/JCxiibLrtOwypixZLrClk/ToQmkw2TMfi+hNxHY8CdeSbTAFs0lVDXEK+qSoslqZfSj0GL3WTM9NiLoMrtkrBBBkCS5rqSxCDa8zWKdqkmXvaRQeG+wO+jMRD8bpJRIVowU7GC1mZ+65Va7tCi7sistj/Dro693EFsd0ZeyPTuYTRLuCKDM2/Vf4Ule8gct0JDgoqtl9dkyjzhfe1WOQt8ki6W3euGJJ4ti51k2OrYhfRwu8bpyRggyhI9xwZUfV27bAqtyg3Jqg0pUFHAEBlYDBbhHQzbE5odmRqq2Zs4qbrJL8i6GmdDFRDUyhHaRcaojl/ivD1vshYzBUuEs0zT6SrsqLPMyy50wJpMtZUMSo6/WtDeOgeoyPhN0zO1o9CLIwSQrSZzg0XZrZSx/FR7ANvJRENeziGxNcUiyTg2D7ysr9yw/WwW+tjCvPLKLrJDom7lNbscIJPtmSn9YHTTgHybNCgy0MBR4AW9RNnRKonDygu7inrbiXOvZDYwBshYs6NKmRmlSoqsbUpHkTHUehO38tq4SxQgv67TjgpOg2SR6sWm5gAZkR+u5dtgdiUU5Za0ie4ZfWTQ2EsCfSOwOx1Nw3yWOH1BBBwYM7n2ZUh1FGcTS9XKuXYbt/iDprMIn30DlC4Xnip51GRYI8k9J3Ugy7aSYZ766xZSRRyg8RtQM78Oauog1JkVa0vXmLzNZzG1+jZbPMhnKca2GTVeE69jbcMWwWzZbJsPqNR8BgsoIB4BJjvc+hMSURRXVekSXyfy2TbvlqZZ7gWR3XvVUMTtIk7b2apcD2xE0sRrs3TbQGeJ0nh2LGT3l4DlB6xuJFUcp8INm1AXhNqvy0JPphonWNSB1zrPCW83DeO6n9UFEPvhbLGqxdYw38g60eUlAjAAcXzIZICfMVFXBQVY/4orNj/8/qRx9f0RMSebJbUgvbTZ69kJxHg1m8WcGtObU42bV9V0Ub92hqiFgQVeHlZLB4Qy8hz+o1e25vq2w+T++uYER3U+y4ouP95rMyxK2WVphMHjz6fbicbD5hoBu1+o3p+l+6Ya/yXeOIGMb4zQ6/mXDvPJl7OfU4tyOeh1mZ2t9AVNpblccWqen148TPp7518359IdnZYxXB5pjSj2z87/K7Sv1fGrBWLPZCRu51/vHg3pzHh5lhJkGVFYLbxYes8nP5/ub5/vfEWG6mQUrpaL/IcyveaBFwVFXbj8vK7M3kh/vyJzO59/ebqRXn89WzRxXbUz6bQZ4PHsy+3Gba/I2Jm2tzRxESIhP0aeWf8GrdccNiopN8jcnl3N5w9n9/PvKnMUtG27UoHm6dPV2dnDZDsZw+kSmWYXkpZHyWoiwQUq6/WL48/GZoPMBFxObn+CaznCL9Yj/PJuMvmpDyZbyUT9fJ/R+UNQHIGLtWooxkWAQF8LVq8N2yaZ85PJ7TW4u5WHkyutg88mky+31+d3k1NwN9lChibrnAwNsWUhfmBVpmE3AvhVEDJgRK4WsYzuIiNlTutgdXh7Da/v72SHvSdD8m5fBFsOLLEK4zw5hqcJiVsoKtINywutbqyY7iQjFdvdVTeUrsF0Cqf383dkSK4zHrSIY+krUCdNxXGWBYtc/ZCdJsLulvdjnaSQL7wzmrKpk8uTyeQaajLzq+n55fS6J/N4evrUUdS4/UuTIW3ZiWxTFnF1pOUmCpBFkguNFy9uJimVuTm90Di7n8wn0/On+5vzC9Xs++nJ3cX05GGuyJxfdAI3n9x/1dArHWjTZ3sFswzkl8dcdCpfot9UBNXP02c4FQCcn3SYnt5PruDlFH5T8jR/UkuCni7ulfT97CRPUjmd9oCqvHS9Zq2rYRxIMB4I0oevbZAmLzlhlG5MC8CTm/lf1z8v9NiYX0CpvW470frr4kFTuTnZMIkieZ4fYVoLwANUmAyDLQoTZN5mOAOdeHPEnn+7n3T+1+2ZHEzz+/m8GyiKyuOmp2yWSe8SQSlqdYWllkyPOg1oAns5ozISfPGgQfTGYX980mzmD+BxMvkGvnbUJk+Pr+4ibbeLDkzDdiZHfu3NPO+I04BQBppOEljSUcmbjfDJbt5UB00vlCM2vwOXJ+C77pf7i9ergi3H679jesyK1Spg4vADBstbAJkTKacrce1qcw69qPzX73R699f8dnL17dudVNvS3ryhQptgPexIQmTod+CVDMMwnTyCooks9CJqJCzd13ROfp5dXan48+rq5+syYIuFzcvKWypFi5X4AJVyvwSUpzBqHAPXm2bBLdPo9fu97DX262VAtl+vNlMaJla6TLpkn7QrEM9EUFhAeGJTuEy/qJ09e/tAyuPq/TpC1ye190k7NtlFKLmwnCt534CMl8OYD1aVQsLDIBbk/efUD+Nj79HwDNO2AAlCE7ztCANLj7EqxbvdQUwS1VWTcWJvthmtNw+N60/TAAos0BVIlhO/KR8zERF1sAziQkQupZT5Ig2rH0lT+jZ69fb9IOo5k/BzN6UkP7SLi5dl/N7XhRBRRaFZLpJlkKldp9AbKYKEutm6IstAn7yNlq9SlWYc2+WLo7Zex/ULsPKW4uAoyYtfhOEvHPdljtMSQa1Wp+z4hi7xQzZjAAcO4An+c9jQxZuZO+rRiLzfhc5cDyvIKIB2HajS86iRfkz8+fuBrWHG9StphyyJRBQ8BwWW3e1yRrsMIkNGXRIrimxVlILqGtHVn0MGYIHN9RJhYLmkyG0E/OeqEZwWeojrLC0EBTbbwIUWtV21H5KbcID/sM00ydqrMQse1z4BWOf9dEFjWHTLh+U/XKQlhELV0bjUymIpbvwY5b7/DGK51gBWufBdTKPGBUSsOLWt0kHC1JvR4pQ7UqTsVshvONIVckxg/nFcbPfFP3FmmDMcyaiLENZkppXWbFVLNewANyCRYwOrLiFgbU3FsUvLfgmb9dTFipmmW6mMS6QWkZppbUlXGsYlIKs0zuWw96WcwWIBjlSG/ZswosZbONwAaMWV68iaWtUp8lQanjIEhljKYW9J5Z0P1az/QTCRtIO08hyyZABWGCwLqRJirvYL5ZnsB2YTj0qV537+dqa/gqh1Mf+hcrak8Y0ZB1aaGmFoABFg6Uz+eNkN8T8AUYt+HyezrmlbGKhcuWqnP5EJ6Pr4PyBfL5DRzHpYE6SWDcpwjNiqqlua1j96wI8YMWLEiBEjRowYMWLEiBEjRowYMWLEiBEjRowY8X+B/wEZd+EqgmGLLwAAAABJRU5ErkJggg==";
  menuArray: any[] = [];
  selectedMenu : any = 1;
  showMenu: any = false;
  profileName : any = "Faizan Ashraf";
  notification: any[] = [];
  authentication: any = true;
  subscription!: Subscription;
  screenWidth: any;
  screenHeight: any;

  constructor(
    private loginService: LoginService,
    public router: Router,
    private notificationService: NotificationService,
    private matDialog: MatDialog
  ){
    // this.authentication = this.loginService?.isAuthenticated;
    // if(!this.authentication){
    //   this.router.navigate(['./login']);
    // }
  }
  ngOnInit(): void {
    this.getMenu();
    this.loginService.emitAction(this.showMenu);
    this.getLatestNotifications();
    this.subscription = this.loginService.loginObserveable.subscribe(action => {
      this.authentication = action;
    });
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  showMenuTrue(){
      this.showMenu = !this.showMenu;
      this.loginService.emitAction(this.showMenu);
  }
  getMenu(){
    this.menuArray = this.loginService.getMenu();
  }
  getLatestNotifications(){
    this.notification = this.notificationService.getNewNotification();
  }
  logOut(){
    this.loginService.emitLogin(false);
    this.authentication = false;
    this.router.navigate(['./login']);
  }
  openAboutUs(){
    this.matDialog.open(AboutUsComponent , {
      autoFocus: false,
      minWidth: this.screenWidth>1024?'950px': this.screenWidth>600?'550px':'350px',
      maxWidth: this.screenWidth>1024?'950px': this.screenWidth>600?'550px':'350px',
      maxHeight: "500px",
      minHeight: "500px",
      disableClose: false,
    }).afterClosed().subscribe(action => {
      if (action) {
      }
    });
  }
  openContactUs(){
    this.matDialog.open(ContactUsComponent , {
      autoFocus: false,
      minWidth: this.screenWidth>1024?'950px': this.screenWidth>600?'550px':'350px',
      maxWidth: this.screenWidth>1024?'950px': this.screenWidth>600?'550px':'350px',
      maxHeight: this.screenWidth>1024?'300px': '500px',
      minHeight: this.screenWidth>1024?'300px': '500px',
      disableClose: false,
    }).afterClosed().subscribe(action => {
      if (action) {
      }
    });
  }
  openFeedback(){
    this.matDialog.open(FeedbackComponent , {
      autoFocus: false,
      minWidth: this.screenWidth>1024?'650px': this.screenWidth>600?'550px':'350px',
      maxWidth: this.screenWidth>1024?'650px': this.screenWidth>600?'550px':'350px',
      maxHeight: this.screenWidth>1024?'480px': '550px',
      minHeight: this.screenWidth>1024?'480px': '550px',
      disableClose: false,
    }).afterClosed().subscribe(action => {
      if (action) {
      }
    });
  }
  selectMenu(menu: any){
    this.selectedMenu = menu?.menuNo;
    this.router.navigate(["./",menu?.path]);
  }
}
