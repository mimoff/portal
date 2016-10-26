import angular from 'angular';
import userCardComponent from './userCard.component';

let userCardModule = angular.module('userCard', [
])

.component('userCard', userCardComponent)

.name;

export default userCardModule;
