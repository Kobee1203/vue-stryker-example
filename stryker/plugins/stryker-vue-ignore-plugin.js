import { declareValuePlugin, PluginKind } from '@stryker-mutator/api/plugin';

const IGNORED_FUNCTIONS = new Set(['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'withDefaults']);

export const strykerPlugins = [
  declareValuePlugin(PluginKind.Ignore, 'vue', {
    shouldIgnore(path) {
      if (
        path.isExpressionStatement() &&
        path.node.expression.type === 'CallExpression' &&
        path.node.expression.callee.type === 'Identifier' &&
        IGNORED_FUNCTIONS.has(path.node.expression.callee.name)
      ) {
        return `Ignore "${path.node.expression.callee.name}" method.`;
      }

      if (
        path.isCallExpression() &&
        path.node.callee.type === 'Identifier' &&
        IGNORED_FUNCTIONS.has(path.node.callee.name)
      ) {
        return `Ignore "${path.node.callee.name}" method and its arguments`;
      }

      if (
        path.isObjectExpression() &&
        path.parentPath.isCallExpression() &&
        path.parentPath.node.callee.type === 'Identifier' &&
        IGNORED_FUNCTIONS.has(path.parentPath.node.callee.name)
      ) {
        return `Ignore "${path.parentPath.node.callee.name}" method arguments`;
      }
    },
  }),
];
