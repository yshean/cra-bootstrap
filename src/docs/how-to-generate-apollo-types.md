```bash
apollo codegen:generate \
--excludes=node_modules/* \
--includes=**/*.tsx \
--endpoint http://localhost:4000 \
--target typescript \
--tagName=gql \
--outputFlat src/__generated__
```
