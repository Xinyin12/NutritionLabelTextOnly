jQuery("#simulation")
;(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);	window.widgets = {
		descriptionMap : widgetDescriptionMap = {},
		rootWidgetMap : widgetRootMap = {}
	};

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-71d6f30f", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-71d6f30f", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_59", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_59", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-1f170441", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-1f170441", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_137", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_137", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-d34930c2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-d34930c2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_134", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_134", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-48f5ec00", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-48f5ec00", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_138", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_138", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-43a12bbe", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-43a12bbe", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_131", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_131", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-1c51c031", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-1c51c031", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_139", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_139", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-3cd8d36d", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-3cd8d36d", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_135", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_135", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-e6049031", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-e6049031", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_140", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_140", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-0e82c4d1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-0e82c4d1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_129", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_129", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2355b85d", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2355b85d", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_141", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_141", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-21b30c12", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-21b30c12", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_136", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_136", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-f0c196d8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-f0c196d8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_142", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_142", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-9b9d2563", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-9b9d2563", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_130", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_130", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-5f39a751", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-5f39a751", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_143", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_143", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-517016d8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-517016d8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_127", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_127", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4faf4caa", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4faf4caa", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_144", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_144", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-a9379db0", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-a9379db0", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_133", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_133", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-49265e4f", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-49265e4f", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_145", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_145", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-148417a9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-148417a9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_128", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_128", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-cd4510f9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-cd4510f9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_146", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_146", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-931c8c2c", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-931c8c2c", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_149", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_149", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-374b5854", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-374b5854", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_150", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_150", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-da9554b1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-da9554b1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_132", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_132", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-1d4e859b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-1d4e859b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_147", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_147", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4ea0d5f8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-d839e0e0", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-d839e0e0", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_148", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_148", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8cf6330d", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8cf6330d", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_151", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_151", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2d0d53bc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-6a0581b2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-6a0581b2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_60", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_60", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-e3d88f7e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-e3d88f7e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-e3d88f7e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-e3d88f7e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Paragraph_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Top_Bar-1"]; 

	widgets.descriptionMap[["s-Image_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Top_Bar-1"]; 

	widgets.descriptionMap[["s-Paragraph_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Top_Bar-1"]; 

	