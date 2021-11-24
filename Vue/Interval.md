```
  mounted () {
    this.startTabRolling()
  },
  ```
  ```
   computed: {
    rollingCycle () {
      return 1000
    }
  },
  ```
```
    startTabRolling () {
      this.rollingInterval = setInterval(() => {
        ~~~~
      }, this.rollingCycle)
    }
```
```
      beforeRouteLeave () {
    clearInterval(this.rollingInterval)
},

```
