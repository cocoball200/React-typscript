# typescript가 주된 언어로 사용할 때 
npx create-react-app my-app --template typescript 
으로 만들어 줄것! template typescript
# 다른 것들을 불러올때, 이런식으로 불러와야 함 
yarn add @types/styled-components
# @types가 대부분의 유명한 것들은 위의 식으로 가져오지만, 간혹가다 없는 경우는 tsconfig.json에 아래를 추가해야함 
noImplicitAny
