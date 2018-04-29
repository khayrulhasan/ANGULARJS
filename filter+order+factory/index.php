<!DOCTYPE html>
<html>
<head>
	<title>angular js</title>
		
</head>
<body>
	<h1>Hello world</h1>


		<div ng-app="myApp">

			<div ng-controller="FirstCtrl">
				<input type="text" name="" ng-model="search.name">
				<table>
					<tr ng-repeat="li in ctlData.data | filter:search">
						<td>{{li.id}}</td><td>{{li.name}}</td>
					</tr>
				</table>
				
			</div>

			

			

		</div>



	 <script src="//code.angularjs.org/snapshot/angular.min.js"></script>

	<script src="main.js"></script>

</body>
</html>