/* eslint-disable */
/* prettier-ignore */
import '@antfu/eslint-config'
import type { Linter } from 'eslint'

declare module '@antfu/eslint-config' {
export interface RuleOptions {
  /**
   * Enforce canonical class names.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-canonical-classes.md
   */
  'tailwindcss/enforce-canonical-classes'?: Linter.RuleEntry<TailwindcssEnforceCanonicalClasses>
  /**
   * Enforce a consistent order for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-class-order.md
   */
  'tailwindcss/enforce-consistent-class-order'?: Linter.RuleEntry<TailwindcssEnforceConsistentClassOrder>
  /**
   * Enforce consistent important position for classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-important-position.md
   */
  'tailwindcss/enforce-consistent-important-position'?: Linter.RuleEntry<TailwindcssEnforceConsistentImportantPosition>
  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-line-wrapping.md
   */
  'tailwindcss/enforce-consistent-line-wrapping'?: Linter.RuleEntry<TailwindcssEnforceConsistentLineWrapping>
  /**
   * Enforce consistent syntax for css variables.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-variable-syntax.md
   */
  'tailwindcss/enforce-consistent-variable-syntax'?: Linter.RuleEntry<TailwindcssEnforceConsistentVariableSyntax>
  /**
   * Enforce a consistent variant order for Tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-variant-order.md
   */
  'tailwindcss/enforce-consistent-variant-order'?: Linter.RuleEntry<TailwindcssEnforceConsistentVariantOrder>
  /**
   * Enforce logical property class names instead of physical directions.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-logical-properties.md
   */
  'tailwindcss/enforce-logical-properties'?: Linter.RuleEntry<TailwindcssEnforceLogicalProperties>
  /**
   * Enforce shorthand class names instead of longhand class names.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-shorthand-classes.md
   */
  'tailwindcss/enforce-shorthand-classes'?: Linter.RuleEntry<TailwindcssEnforceShorthandClasses>
  /**
   * Disallow classes that produce conflicting styles.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-conflicting-classes.md
   */
  'tailwindcss/no-conflicting-classes'?: Linter.RuleEntry<TailwindcssNoConflictingClasses>
  /**
   * Disallow the use of deprecated Tailwind CSS classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-deprecated-classes.md
   */
  'tailwindcss/no-deprecated-classes'?: Linter.RuleEntry<TailwindcssNoDeprecatedClasses>
  /**
   * Disallow duplicate class names in tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-duplicate-classes.md
   */
  'tailwindcss/no-duplicate-classes'?: Linter.RuleEntry<TailwindcssNoDuplicateClasses>
  /**
   * Disallow restricted classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-restricted-classes.md
   */
  'tailwindcss/no-restricted-classes'?: Linter.RuleEntry<TailwindcssNoRestrictedClasses>
  /**
   * Disallow any css classes that are not registered in tailwindcss.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unknown-classes.md
   */
  'tailwindcss/no-unknown-classes'?: Linter.RuleEntry<TailwindcssNoUnknownClasses>
  /**
   * Disallow unnecessary whitespace between Tailwind CSS classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unnecessary-whitespace.md
   */
  'tailwindcss/no-unnecessary-whitespace'?: Linter.RuleEntry<TailwindcssNoUnnecessaryWhitespace>
}
}

/* ======= Declarations ======= */
// ----- tailwindcss/enforce-canonical-classes -----
type TailwindcssEnforceCanonicalClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  collapse?: boolean
  
  logical?: boolean
}]
// ----- tailwindcss/enforce-consistent-class-order -----
type TailwindcssEnforceConsistentClassOrder = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  componentClassOrder?: ("asc" | "desc" | "preserve")
  
  componentClassPosition?: ("start" | "end")
  
  order?: ("asc" | "desc" | "official" | "strict")
  
  unknownClassOrder?: ("asc" | "desc" | "preserve")
  
  unknownClassPosition?: ("start" | "end")
}]
// ----- tailwindcss/enforce-consistent-important-position -----
type TailwindcssEnforceConsistentImportantPosition = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  position?: ("legacy" | "recommended")
}]
// ----- tailwindcss/enforce-consistent-line-wrapping -----
type TailwindcssEnforceConsistentLineWrapping = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  classesPerLine?: number
  
  group?: ("newLine" | "emptyLine" | "never")
  
  indent?: ("tab" | number)
  
  lineBreakStyle?: ("unix" | "windows")
  
  preferSingleLine?: boolean
  
  printWidth?: number
  
  strictness?: ("strict" | "loose")
}]
// ----- tailwindcss/enforce-consistent-variable-syntax -----
type TailwindcssEnforceConsistentVariableSyntax = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  syntax?: ("shorthand" | "variable")
}]
// ----- tailwindcss/enforce-consistent-variant-order -----
type TailwindcssEnforceConsistentVariantOrder = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
}]
// ----- tailwindcss/enforce-logical-properties -----
type TailwindcssEnforceLogicalProperties = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
}]
// ----- tailwindcss/enforce-shorthand-classes -----
type TailwindcssEnforceShorthandClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
}]
// ----- tailwindcss/no-conflicting-classes -----
type TailwindcssNoConflictingClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
}]
// ----- tailwindcss/no-deprecated-classes -----
type TailwindcssNoDeprecatedClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
}]
// ----- tailwindcss/no-duplicate-classes -----
type TailwindcssNoDuplicateClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
}]
// ----- tailwindcss/no-restricted-classes -----
type TailwindcssNoRestrictedClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  restrict?: ({
    
    fix?: string
    
    message?: string
    
    pattern: string
  } | string)[]
}]
// ----- tailwindcss/no-unknown-classes -----
type TailwindcssNoUnknownClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  ignore?: string[]
}]
// ----- tailwindcss/no-unnecessary-whitespace -----
type TailwindcssNoUnnecessaryWhitespace = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
    
    targetArgument?: ("all" | "first" | "last" | number)
    
    targetCall?: ("all" | "first" | "last" | number)
  }) | ({
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    } | {
      
      match: ({
        
        type: "strings"
      } | {
        
        path?: string
        
        type: "objectKeys"
      } | {
        
        path?: string
        
        type: "objectValues"
      })[]
      
      type: "anonymousFunctionReturn"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  cwd?: string
  
  allowMultiline?: boolean
}]
