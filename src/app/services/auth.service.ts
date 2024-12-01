import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth(): void {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com', // URL do provedor OAuth
      clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Substitua pelo seu clientId
      redirectUri: window.location.origin, // URL de redirecionamento
      scope: 'openid profile email', // Escopos da autenticação
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(): void {
    this.oauthService.initImplicitFlow(); // Redireciona para a página de login do provedor
  }

  logout(): void {
    this.oauthService.logOut(); // Remove as credenciais e encerra a sessão
  }

  get isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
