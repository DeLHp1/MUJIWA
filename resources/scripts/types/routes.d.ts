import "momentum-trail"

declare module "momentum-trail" {
    export interface RouterGlobal {"url":"http:\/\/localhost","port":null,"defaults":[],"routes":{"passport.token":{"uri":"oauth\/token","methods":["POST"]},"passport.authorizations.authorize":{"uri":"oauth\/authorize","methods":["GET","HEAD"]},"passport.token.refresh":{"uri":"oauth\/token\/refresh","methods":["POST"]},"passport.authorizations.approve":{"uri":"oauth\/authorize","methods":["POST"]},"passport.authorizations.deny":{"uri":"oauth\/authorize","methods":["DELETE"]},"passport.tokens.index":{"uri":"oauth\/tokens","methods":["GET","HEAD"]},"passport.tokens.destroy":{"uri":"oauth\/tokens\/{token_id}","methods":["DELETE"]},"passport.clients.index":{"uri":"oauth\/clients","methods":["GET","HEAD"]},"passport.clients.store":{"uri":"oauth\/clients","methods":["POST"]},"passport.clients.update":{"uri":"oauth\/clients\/{client_id}","methods":["PUT"]},"passport.clients.destroy":{"uri":"oauth\/clients\/{client_id}","methods":["DELETE"]},"passport.scopes.index":{"uri":"oauth\/scopes","methods":["GET","HEAD"]},"passport.personal.tokens.index":{"uri":"oauth\/personal-access-tokens","methods":["GET","HEAD"]},"passport.personal.tokens.store":{"uri":"oauth\/personal-access-tokens","methods":["POST"]},"passport.personal.tokens.destroy":{"uri":"oauth\/personal-access-tokens\/{token_id}","methods":["DELETE"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"settings.profile":{"uri":"settings","methods":["GET","HEAD"]},"settings.account":{"uri":"settings\/account","methods":["GET","HEAD"]},"settings.account.update.password":{"uri":"settings\/user\/account\/password","methods":["POST"]},"settings.account.update.email":{"uri":"settings\/user\/account\/email","methods":["POST"]},"settings.profile.pfp.update":{"uri":"settings\/user\/profile\/pfp","methods":["POST"]},"settings.profile.banner.update":{"uri":"settings\/user\/profile\/banner","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"forgot-password":{"uri":"forgot-password","methods":["GET","HEAD"]},"forgot-password.success":{"uri":"forgot-password\/success","methods":["GET","HEAD"]},"password.success":{"uri":"reset-password\/success","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"reset-password","methods":["POST"]},"logout":{"uri":"logout","methods":["DELETE"]},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"activate.account":{"uri":"activate","methods":["GET","HEAD"]}},"wildcards":{"passport.*":[],"passport.authorizations.*":[],"passport.token.*":[],"passport.tokens.*":[],"passport.clients.*":[],"passport.scopes.*":[],"passport.personal.*":[],"passport.personal.tokens.*":[],"sanctum.*":[],"settings.*":[],"settings.account.*":[],"settings.account.update.*":[],"settings.profile.*":[],"settings.profile.pfp.*":[],"settings.profile.banner.*":[],"forgot-password.*":[],"password.*":[],"verification.*":[],"activate.*":[]}}
}