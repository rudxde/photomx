# How to debug and run

For all VsCode Users everything is setup. You just need to execute the `run` debug profile.

## But what happens?
1. The commander is build
```
>dotnet build ./commander/commander.csproj
```
2. The commander starts
```
>dotnet run --project ./commander
```
3. The front Angular app gets builded  
```
>npm run build --prefix ./front
```
4. Electron Starts
```
>./front/node_modules/.bin/electron ./front
```