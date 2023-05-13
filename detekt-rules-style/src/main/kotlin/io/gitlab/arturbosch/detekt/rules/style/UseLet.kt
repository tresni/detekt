package io.gitlab.arturbosch.detekt.rules.style

import io.gitlab.arturbosch.detekt.api.CodeSmell
import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.api.Debt
import io.gitlab.arturbosch.detekt.api.Entity
import io.gitlab.arturbosch.detekt.api.Issue
import io.gitlab.arturbosch.detekt.api.Rule
import io.gitlab.arturbosch.detekt.api.Severity
import io.gitlab.arturbosch.detekt.rules.isNonNullCheck
import io.gitlab.arturbosch.detekt.rules.isNullCheck
import org.jetbrains.kotlin.psi.KtBinaryExpression
import org.jetbrains.kotlin.psi.KtExpression
import org.jetbrains.kotlin.psi.KtIfExpression
import org.jetbrains.kotlin.psi.KtPsiUtil
import org.jetbrains.kotlin.psi.psiUtil.lastBlockStatementOrThis

/**
 * `if` expressions that either check for not-null and return `null` in the false case or check for `null` and returns
 * `null` in the truthy case are better represented as `?.let {}` blocks.
 *
 * <noncompliant>
 * if (x != null) { x.transform() } else null
 * if (x == null) null else y
 * </noncompliant>
 *
 * <compliant>
 * x?.let { it.transform() }
 * x?.let { y }
 * </compliant>
 */
class UseLet(
    config: Config = Config.empty
) : Rule(config) {
    override val issue = Issue(
        javaClass.simpleName,
        Severity.Style,
        "Use `?.let {}` instead of if/else with a null block when checking for nullable values",
        Debt.FIVE_MINS
    )

    private fun isExpressionNull(branch: KtExpression?): Boolean {
        return branch?.let {
            KtPsiUtil.isNullConstant(it.lastBlockStatementOrThis())
        } ?: false
    }

    override fun visitIfExpression(expression: KtIfExpression) {
        super.visitIfExpression(expression)
        val condition = expression.condition as? KtBinaryExpression ?: return

        if (condition.isNullCheck() && isExpressionNull(expression.then)) {
            report(CodeSmell(issue, Entity.from(expression), issue.description))
        } else if (condition.isNonNullCheck() && isExpressionNull(expression.`else`)) {
            report(CodeSmell(issue, Entity.from(expression), issue.description))
        }
    }
}