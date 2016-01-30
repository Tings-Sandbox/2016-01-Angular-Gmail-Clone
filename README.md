This is an good exercise that helped me how to set up an Angular app, how to implement a directive, and how to set up routing to use set views. 

See [Notes.txt] (Notes.txt) for extra notes, and follow [Thinkful's Tutorial](https://www.thinkful.com/learn/angularjs-tutorial-build-a-gmail-clone/Getting-Started-with-AngularJS) if you want to try it yourself. They do skip through a lot of the email logic, but they make a good review of Angular concepts. 

##The Application
![picture alt](/img/16EmailApp.png)

What I'm trying to build

![picture alt](/img/15myEmailApp.png)

After following through the tutorial, I was able to get the json data containing mock emails to render. However, the life of me I couldn't get one of the modules (ngSanitize) to inject into my app properly, which is pretty vital for one of the directives they had us implementing. It's mostly finished except for that feature.

##Getting it working with ng-app,  ng-controller, and $routeProvider
![picture alt](/img/1simpleScopeCode.png)

Code

![picture alt](/img/2simpleScopeScreen.png)

Result

![picture alt](/img/3basicFileStructure.png)

Basic File Structure

![picture alt](/img/4settingUpConfig.png)

Setting up routes using $routeProvider

##Linking controllers and factories
![picture alt](/img/7linkingFactoryAndController.png)

InboxFactory holds commonly used functions. You can use $http module to load json files in angular. It returns a promise. 

![picture alt](/img/8linkingFactoryAndController.png)

InboxCtrl calls the factory's getMessages function

![picture alt](/img/9revampingOurFactoryAndUsingPromises.png)

A more fleshed out InboxFactory; note how the Angular's q promise works. 

![picture alt](/img/10howThingsAreLookingNow.png)

More fleshed out File Structure 

##Directives
![picture alt](/img/11SettingUpDirectives.png)

Set up your directive's controller and link it to the templateUrl

![picture alt](/img/11SettingUpDirectivesTemplateHtml.png)

set up your directive's template html.

![picture alt](/img/13EmailDirectivesControllerCallsGetMessages.png)

Another directive example for the email view. not that angular.bind() is used to return the then() function that is bound to this. 

##Bonus
![picture alt](/img/14locationPathChangesTheUrl.png)

$location.path changes the url and redirects you to that page

![picture alt](/img/15RouteParamsGivesAccessToUrlParams.png)

$routeParams gives us access to what's after the colon in your url.