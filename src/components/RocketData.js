const rocketData = [
  [1.00369, 51.3557],
  [1.17774, 51.3253],
  [1.28874, 51.0784],
  [1.2946, 51.349],
  [1.0994, 51.379],
  [0.7902, 51.313934],
  [0.877792, 51.39416],
  [0.740767, 51.410878],
  [0.820856, 51.453306],
  [0.63485, 51.426786],
  [0.62409, 51.445585],
  [0.57914, 51.454911],
  [0.568453, 51.466108],
  [0.50612, 51.432697],
  [0.562233, 51.481653],
  [0.63156, 51.476307],
  [0.658013, 51.480028],
  [0.469811, 51.400343],
  [0.474533, 51.315061],
  [0.492968, 51.290359],
  [0.427627, 51.225353],
  [0.475305, 51.200498],
  [0.579533, 51.078477],
  [0.358619, 51.001708],
  [0.178012, 51.02318],
  [0.250311, 50.814482],
  [0.242088, 51.16527],
  [0.261749, 51.187238],
  [0.171719, 51.16694],
  [0.154506, 51.186672],
  [0.151739, 51.206194],
  [0.060967, 51.118494],
  [-0.132281, 51.210674],
  [-0.002754, 51.245921],
  [-0.798828, 51.130076],
  [-0.852943, 51.525605],
  [0.167175, 51.256521],
  [0.155629, 51.26556],
  [0.130993, 51.256559],
  [0.198537, 51.285854],
  [0.213333, 51.292166],
  [0.492479, 51.290158],
  [0.474781, 51.315198],
  [0.286371, 51.290621],
  [0.283074, 51.279815],
  [0.321805, 51.279404],
  [0.077906, 51.272936],
  [0.08336, 51.300037],
  [0.018157, 51.295129],
  [-0.036186, 51.294854],
  [0.019012, 51.332446],
  [0.002245, 51.348399],
  [-0.033489, 51.344324],
  [-0.092191, 51.343111],
  [-0.077614, 51.359268],
  [-0.074491, 51.367382],
  [0.016001, 51.376149],
  [1.785626, 51.520976],
  [1.670885, 51.598946],
  [1.414563, 51.483655],
  [1.290665, 51.501392],
  [1.224133, 51.502511],
  [0.140403, 51.340747],
  [0.152094, 51.354905],
  [0.108095, 51.363422],
  [0.095374, 51.375362],
  [0.09969, 51.374498],
  [0.109742, 51.379633],
  [0.119961, 51.381263],
  [0.078481, 51.383541],
  [0.054089, 51.390142],
  [0.151627, 51.37912],
  [0.158472, 51.381875],
  [0.160214, 51.388322],
  [0.178726, 51.381597],
  [0.212945, 51.379514],
  [0.208081, 51.399616],
  [0.219867, 51.401179],
  [0.184964, 51.400427],
  [0.250324, 51.405112],
  [0.284284, 51.393964],
  [0.274719, 51.409372],
  [0.28322, 51.41461],
  [0.272539, 51.432023],
  [0.300187, 51.443806],
  [0.281745, 51.451377],
  [0.324328, 51.43804],
  [0.373037, 51.40306],
  [0.373020, 51.430204],
  [0.376366, 51.442841],
  [0.443667, 51.457331],
  [2.697464, 52.192020],
  [2.468602, 52.038223],
  [2.013093, 52.286204],
  [1.537340, 52.35802],
  [1.597493, 51.940058],
  [1.689110, 51.843538],
  [1.578059, 51.801209],
  [1.365738, 52.018597],
  [1.306680, 51.982842],
  [1.287049, 51.948370],
  [1.444539, 52.116648],
  [1.458546, 52.286346],
  [1.205637, 52.069169],
  [1.226351, 52.075777],
  [0.957580, 52.018729],
  [0.127670, 51.393921],
  [0.141632, 51.393594],
  [0.148777, 51.399033],
  [0.152448, 51.401691],
  [0.107808, 51.395557],
  [0.090437, 51.411750],
  [0.077589, 51.411260],
  [0.166565, 51.410328],
  [0.183815, 51.410338],
  [0.148444, 51.423751],
  [0.140906, 51.428001],
  [0.174140, 51.429677],
  [0.140119, 51.439934],
  [0.128910, 51.434622],
  [0.108323, 51.425530],
  [0.102591, 51.425799],
  [0.080871, 51.421451],
  [0.089899, 51.432863],
  [0.085705, 51.435547],
  [0.107594, 51.437336],
  [0.102738, 51.439193],
  [0.094185, 51.446412],
  [0.098998, 51.451612],
  [0.097482, 51.453490],
  [0.094519, 51.452514],
  [0.106152, 51.455517],
  [0.113343, 51.459796],
  [0.084761, 51.460090],
  [0.081639, 51.463036],
  [0.086412, 51.465425],
  [0.137411, 51.456926],
  [0.162516, 51.450175],
  [0.182586, 51.437504],
  [0.186671, 51.441783],
  [0.185001, 51.456019],
  [0.185659, 51.464179],
  [0.214322, 51.460236],
  [0.211692, 51.472568],
  [0.233456, 51.469260],
  [0.243000, 51.461619],
  [0.365503, 51.453905],
  [0.334091, 51.464045],
  [0.394164, 51.481495],
  [0.387992, 51.488382],
  [0.327634, 51.489357],
  [0.304651, 51.495005],
  [0.287544, 51.497112],
  [0.233949, 51.492128],
  [0.312302, 51.503871],
  [0.498709, 51.496334],
  [0.509531, 51.506309],
  [0.531590, 51.507086],
  [0.574045, 51.505662],
  [0.543244, 51.514599],
  [0.537567, 51.516183],
  [0.538700, 51.519620],
  [0.499214, 51.520689],
  [0.494892, 51.523305],
  [0.476438, 51.520689],
  [0.460784, 51.516485],
  [0.514028, 51.529984],
  [0.520624, 51.533592],
  [0.509282, 51.541696],
  [0.505198, 51.542657],
  [0.495044, 51.540140],
  [0.464804, 51.536159],
  [0.553911, 51.538441],
  [0.543342, 51.537749],
  [0.545885, 51.542643],
  [0.553116, 51.544570],
  [0.614498, 51.534050],
  [0.573101, 51.556082],
  [0.616434, 51.578908],
  [0.658595, 51.564622],
  [0.715276, 51.532358],
  [0.674817, 51.504013],
  [0.815915, 51.548798],
  [0.841388, 51.549008],
  [0.796537, 51.568656],
  [0.799514, 51.579460],
  [0.845729, 51.578204],
  [0.908294, 51.580195],
  [0.900759, 51.595715],
  [0.879743, 51.598008],
  [0.875397, 51.604147],
  [0.874087, 51.605330],
  [0.865038, 51.601817],
  [0.935955, 51.616473],
  [0.981641, 51.614726],
  [0.950664, 51.632087],
  [0.908127, 51.628334],
  [0.866906, 51.639483],
  [1.543694, 52.040592],
  [1.039792, 52.206227],
  [1.012197, 52.233707],
  [1.201237, 52.334284],
  [1.320311, 52.455051],
  [1.351608, 52.468563],
  
]

export default rocketData;