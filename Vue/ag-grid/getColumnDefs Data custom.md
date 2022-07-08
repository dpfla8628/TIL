```
        colDefs = [
          {
            'headerName':'header,
            'width': 400,
            'field': 'menuTreeData',
            'cellRendererFramework': Vue.extend({
              template: `<div style="text-align: left"><span>{{label}}</span></div>`,
              computed: {
                label () {
                  let treeData =  _self.Data[this.params.rowIndex].menuTreeData
                  let menuName = ""
                  for (let i = 0 ; i < treeData.length ; i++) {
                    if ( i === treeData.length - 1 ) {
                      menuName += (treeData[i])
                    } else {
                      menuName += (treeData[i]) + "ㅤ>ㅤ"
                    }
                  }
                  return menuName
                }
              }
            })
          },
          ...
        ]
```
