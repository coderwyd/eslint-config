import { createEslintRule } from '../utils'

export const RULE_NAME = 'named-tuple-spacing'
export type MessageIds = 'expectedSpaceAfter' | 'unexpectedSpaceBetween' | 'unexpectedSpaceBefore'
export type Options = []

const REG = /^([\w_$]+)(\s*)(\?\s*)?:(\s*)(.*)$/

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Expect space before type declaration in named tuple',
      recommended: 'stylistic',
    },
    fixable: 'code',
    schema: [],
    messages: {
      expectedSpaceAfter: 'Expected a space after the \':\'.',
      unexpectedSpaceBetween: 'Unexpected space between \'?\' and the \':\'.',
      unexpectedSpaceBefore: 'Unexpected space before the \':\'.',
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode()
    return {
      TSNamedTupleMember: (node) => {
        const code = sourceCode.text.slice(node.range[0], node.range[1])

        const match = code.match(REG)
        if (!match)
          return

        const labelName = node.label.name
        const spaceBeforeColon = match[2]
        const optionalMark = match[3]
        const spacesAfterColon = match[4]
        const elementType = match[5]

        function getReplaceValue() {
          let ret = labelName
          if (node.optional)
            ret += '?'
          ret += ': '
          ret += elementType
          return ret
        }

        if (optionalMark?.length > 1) {
          context.report({
            node,
            messageId: 'unexpectedSpaceBetween',
            *fix(fixer) {
              yield fixer.replaceTextRange(node.range, code.replace(REG, getReplaceValue()))
            },
          })
        }

        if (spaceBeforeColon?.length) {
          context.report({
            node,
            messageId: 'unexpectedSpaceBefore',
            *fix(fixer) {
              yield fixer.replaceTextRange(node.range, code.replace(REG, getReplaceValue()))
            },
          })
        }

        if (spacesAfterColon != null && spacesAfterColon.length !== 1) {
          context.report({
            node,
            messageId: 'expectedSpaceAfter',
            *fix(fixer) {
              yield fixer.replaceTextRange(node.range, code.replace(REG, getReplaceValue()))
            },
          })
        }
      },
    }
  },
})
