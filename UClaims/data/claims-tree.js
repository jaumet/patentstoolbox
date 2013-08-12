
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// This the definition of the variables necessary . 
// The format is JSON (JavaScript Object Notation), defined here: http://www.json.org/
// to build the PatentClaims interface:
// 
// List of variables and their definitions:
// 1) var PATENT_INFO
//
// 2) var CLAIMS_TREE: this is the minimum data necessary 
// 			to build the tree of claims and their dependencies.
//			The dependencies are represented as nested objects.
//			NOTE: more values can be added in the future for each node.
// 
// 3) var CLAIMS_TEXT: array of the texts of the claims witrh and "id" also referenced in CLAIMS_TREE.
// 
// 4) var CLAIMS_INTERFACE: this variable is reserved for the interface configuration and options. 
// 			    It would be defined in the future.
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////

var PATENT_INFO = 
	"patent": 
		{
			"code": "",
			"url": "",
			"title": "bla bla bla",
			"what_else_1": "...",
			"what_else_2": "..."
		};

// Example for the case Figure1: Example tree 1 in our google document:
// 1-> (2, 3, 4, 5, 6 -> (7))

var CLAIMS_TREE = 
	[
		{
			"id": 1,
			"dependsOn": { null },
			"children":
			[
				{ "id": 2, "dependsOn": { "id": 1 } },
				{ "id": 3, "dependsOn": { "id": 1, "id": 2 } },
				{ "id": 4, "dependsOn": { "id": 1 } },
				{ "id": 5, "dependsOn": { "id": 1, "id": 2, "id": 3, "id": 4 } },
				{
					"id": 6,
					"dependsOn": { "id": 1, "id": 2, "id": 3, "id": 4, "id": 5 },
					"children":
					[
						{ "id":7, "dependsOn": { "id": 6 } }
					]
				}
			]
		}
	];

/////////////////////////////////////////////////////////////

var CLAIMS_TEXT = 
	[
		{
			"id": 1,
			"text": "A boring tool according to claim 1 characterised in that the means for causing rotation of the blade advancing member comprises a worm rotatable by a detachable handle or key and a meshingworm wheel secured to a shaft extending from the shank of the blade advancing member and co-axial therewith."
		},
		{
			"id": 2,
			"text": "The magnetic disk drive according to claim 1,characterized in that the adjustment of said positioning means constitutes means for compensating the servo signal."
		},
		{
			"id": 3,
			"text": "A boring tool according to claim 1 or 2 characterised in that the tool advancing member has a head with a conical surface abutting the inner ends of the cutting blades."
		},
		{
			"id": 4,
			"text": "A boring tool according to claim 1 characterised in that the head lies within a cylindrical cavity extending inwardly from one end of the body member, the open end of the cavity being closed by a plug which backs a frusto-coiucal pressure pad supporting the cutter blades."
		},
		{
			"id": 5,
			"text": "A boring tool according to any of claims 1-4 characterised in that the cutter blades are guided by holes in the body which lie in planes radial to the axis of rotation."
		},
		{
			"id": 6,
			"text": "A boring tool according to any of claims 1-5 characterised in that a serrated drive spigot co-axial with the axis of rotation of the tool is mounted on one end of the body remote from the cutting blades and for insertion within a corresponding socket in a drive adaptor, the tool being detachably securable to the adaptor by a ring nut engagesble with a screw threaded portion of the adaptor."
		},
		{
			"id": 7
			"text": "A boring tool according to claim 6 characterised in that the adaptor has a threaded hole to engage the screwed end of a power drill drive shaft."
		}
	];
	
////////////////////////////////////////////////////////////////////////////////
