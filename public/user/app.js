'use strict'

// register all modules
angular.module('gameori', [
	'ngRoute',
	'appRoutes',
    'customFilters',
    'gameService',
    'gameCommentService',
    'indexService',
    'amazonService',
    'sharedService',
    'ContactService',
    'mainModule',
    'gamesModule',
    'gameModule',
    'contactModule']);
