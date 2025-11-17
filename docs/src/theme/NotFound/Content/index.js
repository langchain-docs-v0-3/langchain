import React from 'react';
import clsx from 'clsx';
import {useLocation} from 'react-router-dom';

function LegacyBadge() {
  return (
    <span className="badge badge--secondary">LEGACY</span>
  );
}

export default function NotFoundContent({className}) {
  const location = useLocation();
  const pathname = location.pathname.endsWith('/') ? location.pathname : location.pathname + '/'; // Ensure the path matches the keys in suggestedLinks
  const {canonical, alternative} = suggestedLinks[pathname] || {};

  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <h1 className="hero__title">
              {canonical ? 'Page Moved' : alternative ? 'Page Removed' : 'Page Not Found'}
          </h1>
          {
            canonical ? (
              <h3>You can find the new location <a href={canonical}>here</a>.</h3>
            ) : alternative ? (
              <p>The page you were looking for has been removed.</p>
            ) : (
              <p>We could not find what you were looking for.</p>
            )
          }
          {alternative && (
            <p>
              <details>
                <summary>Alternative pages</summary>
                  <ul>
                    {alternative.map((alt, index) => (
                      <li key={index}>
                        <a href={alt}>{alt}</a>{alt.startsWith('/v0.1/') && <>{' '}<LegacyBadge/></>}
                      </li>
                    ))}
                  </ul>
              </details>
            </p>
          )}
          <p>
              Please contact the owner of the site that linked you to the
              original URL and let them know their link {canonical ? 'has moved.' : alternative ? 'has been removed.' : 'is broken.'}
          </p>
        </div>
      </div>
    </main>
  );
}

const suggestedLinks = {
  "/langchain/docs/changelog/core/": {
    "canonical": "https://github.com/langchain-ai/langchain/releases?q=tag:%22langchain-core%3D%3D0%22&expanded=true",
    "alternative": [
      "/v0.1/docs/changelog/core/"
    ]
  },
  "/langchain/docs/changelog/langchain/": {
    "canonical": "https://github.com/langchain-ai/langchain/releases?q=tag:%22langchain%3D%3D0%22&expanded=true",
    "alternative": [
      "/v0.1/docs/changelog/langchain/"
    ]
  },
  "/langchain/docs/contributing/documentation/technical_logistics/": {
    "canonical": "/langchain/docs/contributing/how_to/documentation/",
    "alternative": [
      "/v0.1/docs/contributing/documentation/technical_logistics/"
    ]
  },
  "/langchain/docs/cookbook/": {
    "canonical": "/langchain/docs/tutorials/",
    "alternative": [
      "/v0.1/docs/cookbook/"
    ]
  },
  "/langchain/docs/expression_language/": {
    "canonical": "/langchain/docs/how_to/#langchain-expression-language-lcel",
    "alternative": [
      "/v0.1/docs/expression_language/"
    ]
  },
  "/langchain/docs/expression_language/cookbook/code_writing/": {
    "canonical": "https://langchain-docs-v0-3.github.io/langgraph/tutorials/code_assistant/langgraph_code_assistant/",
    "alternative": [
      "/v0.1/docs/expression_language/cookbook/code_writing/"
    ]
  },
  "/langchain/docs/expression_language/cookbook/multiple_chains/": {
    "canonical": "/langchain/docs/how_to/parallel/",
    "alternative": [
      "/v0.1/docs/expression_language/cookbook/multiple_chains/"
    ]
  },
  "/langchain/docs/expression_language/cookbook/prompt_llm_parser/": {
    "canonical": "/langchain/docs/tutorials/llm_chain/",
    "alternative": [
      "/v0.1/docs/expression_language/cookbook/prompt_llm_parser/"
    ]
  },
  "/langchain/docs/expression_language/cookbook/prompt_size/": {
    "canonical": "/langchain/docs/how_to/trim_messages/",
    "alternative": [
      "/v0.1/docs/expression_language/cookbook/prompt_size/"
    ]
  },
  "/langchain/docs/expression_language/get_started/": {
    "canonical": "/langchain/docs/how_to/sequence/",
    "alternative": [
      "/v0.1/docs/expression_language/get_started/"
    ]
  },
  "/langchain/docs/expression_language/how_to/decorator/": {
    "canonical": "/langchain/docs/how_to/functions/#the-convenience-chain-decorator",
    "alternative": [
      "/v0.1/docs/expression_language/how_to/decorator/"
    ]
  },
  "/langchain/docs/expression_language/how_to/inspect/": {
    "canonical": "/langchain/docs/how_to/inspect/",
    "alternative": [
      "/v0.1/docs/expression_language/how_to/inspect/"
    ]
  },
  "/langchain/docs/expression_language/how_to/message_history/": {
    "canonical": "/langchain/docs/how_to/message_history/",
    "alternative": [
      "/v0.1/docs/expression_language/how_to/message_history/"
    ]
  },
  "/langchain/docs/expression_language/how_to/routing/": {
    "canonical": "/langchain/docs/how_to/routing/",
    "alternative": [
      "/v0.1/docs/expression_language/how_to/routing/"
    ]
  },
  "/langchain/docs/expression_language/interface/": {
    "canonical": "/langchain/docs/how_to/lcel_cheatsheet/",
    "alternative": [
      "/v0.1/docs/expression_language/interface/"
    ]
  },
  "/langchain/docs/expression_language/primitives/": {
    "canonical": "/langchain/docs/how_to/#langchain-expression-language-lcel",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/"
    ]
  },
  "/langchain/docs/expression_language/primitives/assign/": {
    "canonical": "/langchain/docs/how_to/assign/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/assign/"
    ]
  },
  "/langchain/docs/expression_language/primitives/binding/": {
    "canonical": "/langchain/docs/how_to/binding/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/binding/"
    ]
  },
  "/langchain/docs/expression_language/primitives/configure/": {
    "canonical": "/langchain/docs/how_to/configure/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/configure/"
    ]
  },
  "/langchain/docs/expression_language/primitives/functions/": {
    "canonical": "/langchain/docs/how_to/functions/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/functions/"
    ]
  },
  "/langchain/docs/expression_language/primitives/parallel/": {
    "canonical": "/langchain/docs/how_to/parallel/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/parallel/"
    ]
  },
  "/langchain/docs/expression_language/primitives/passthrough/": {
    "canonical": "/langchain/docs/how_to/passthrough/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/passthrough/"
    ]
  },
  "/langchain/docs/expression_language/primitives/sequence/": {
    "canonical": "/langchain/docs/how_to/sequence/",
    "alternative": [
      "/v0.1/docs/expression_language/primitives/sequence/"
    ]
  },
  "/langchain/docs/expression_language/streaming/": {
    "canonical": "/langchain/docs/how_to/streaming/",
    "alternative": [
      "/v0.1/docs/expression_language/streaming/"
    ]
  },
  "/langchain/docs/expression_language/why/": {
    "canonical": "/langchain/docs/concepts/#langchain-expression-language-lcel",
    "alternative": [
      "/v0.1/docs/expression_language/why/"
    ]
  },
  "/langchain/docs/get_started/installation/": {
    "canonical": "/langchain/docs/tutorials/",
    "alternative": [
      "/v0.1/docs/get_started/installation/"
    ]
  },
  "/langchain/docs/get_started/introduction/": {
    "canonical": "/langchain/docs/tutorials/",
    "alternative": [
      "/v0.1/docs/get_started/introduction/"
    ]
  },
  "/langchain/docs/get_started/quickstart/": {
    "canonical": "/langchain/docs/tutorials/",
    "alternative": [
      "/v0.1/docs/get_started/quickstart/"
    ]
  },
  "/langchain/docs/guides/": {
    "canonical": "/langchain/docs/how_to/",
    "alternative": [
      "/v0.1/docs/guides/"
    ]
  },
  "/langchain/docs/guides/development/": {
    "canonical": "/langchain/docs/how_to/debugging/",
    "alternative": [
      "/v0.1/docs/guides/development/"
    ]
  },
  "/langchain/docs/guides/development/debugging/": {
    "canonical": "/langchain/docs/how_to/debugging/",
    "alternative": [
      "/v0.1/docs/guides/development/debugging/"
    ]
  },
  "/langchain/docs/guides/development/extending_langchain/": {
    "canonical": "/langchain/docs/how_to/#custom",
    "alternative": [
      "/v0.1/docs/guides/development/extending_langchain/"
    ]
  },
  "/langchain/docs/guides/development/local_llms/": {
    "canonical": "/langchain/docs/how_to/local_llms/",
    "alternative": [
      "/v0.1/docs/guides/development/local_llms/"
    ]
  },
  "/langchain/docs/guides/development/pydantic_compatibility/": {
    "canonical": "/langchain/docs/how_to/pydantic_compatibility/",
    "alternative": [
      "/v0.1/docs/guides/development/pydantic_compatibility/"
    ]
  },
  "/langchain/docs/guides/productionization/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/"
    ]
  },
  "/langchain/docs/guides/productionization/deployments/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/deployments/"
    ]
  },
  "/langchain/docs/guides/productionization/deployments/template_repos/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/deployments/template_repos/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/comparison/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/comparison/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/comparison/custom/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/comparison/custom/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/comparison/pairwise_embedding_distance/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/comparison/pairwise_embedding_distance/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/comparison/pairwise_string/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/comparison/pairwise_string/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/examples/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/examples/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/examples/comparisons/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/examples/comparisons/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/criteria_eval_chain/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/criteria_eval_chain/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/custom/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/custom/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/embedding_distance/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/embedding_distance/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/exact_match/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/exact_match/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/json/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/json/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/regex_match/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/regex_match/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/scoring_eval_chain/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/scoring_eval_chain/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/string/string_distance/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/string/string_distance/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/trajectory/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/trajectory/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/trajectory/custom/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/trajectory/custom/"
    ]
  },
  "/langchain/docs/guides/productionization/evaluation/trajectory/trajectory_eval/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/evaluation/trajectory/trajectory_eval/"
    ]
  },
  "/langchain/docs/guides/productionization/fallbacks/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/fallbacks/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/amazon_comprehend_chain/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/amazon_comprehend_chain/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/constitutional_chain/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/constitutional_chain/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/hugging_face_prompt_injection/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/hugging_face_prompt_injection/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/layerup_security/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/layerup_security/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/logical_fallacy_chain/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/logical_fallacy_chain/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/moderation/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/moderation/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/presidio_data_anonymization/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/presidio_data_anonymization/multi_language/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/multi_language/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/presidio_data_anonymization/qa_privacy_protection/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/qa_privacy_protection/"
    ]
  },
  "/langchain/docs/guides/productionization/safety/presidio_data_anonymization/reversible/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/reversible/"
    ]
  },
  "/langchain/docs/integrations/chat/ollama_functions/": {
    "canonical": "/langchain/docs/integrations/chat/ollama/",
    "alternative": [
      "/v0.1/docs/integrations/chat/ollama_functions/"
    ]
  },
  "/langchain/docs/integrations/document_loaders/notiondb/": {
    "canonical": "/langchain/docs/integrations/document_loaders/notion/",
    "alternative": [
      "/v0.1/docs/integrations/document_loaders/notiondb/"
    ]
  },
  "/langchain/docs/integrations/llms/llm_caching/": {
    "canonical": "/langchain/docs/how_to/llm_caching/",
    "alternative": [
      "/v0.1/docs/integrations/llms/llm_caching/"
    ]
  },
  "/langchain/docs/integrations/providers/vectara/vectara_summary/": {
    "canonical": "/langchain/docs/integrations/providers/vectara/",
    "alternative": [
      "/v0.1/docs/integrations/providers/vectara/vectara_summary/"
    ]
  },
  "/langchain/docs/integrations/text_embedding/nemo/": {
    "canonical": "/langchain/docs/integrations/text_embedding/nvidia_ai_endpoints/",
    "alternative": [
      "/v0.1/docs/integrations/text_embedding/nemo/"
    ]
  },
  "/langchain/docs/integrations/toolkits/": {
    "canonical": "/langchain/docs/integrations/tools/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/"
    ]
  },
  "/langchain/docs/integrations/toolkits/ainetwork/": {
    "canonical": "/langchain/docs/integrations/tools/ainetwork/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/ainetwork/"
    ]
  },
  "/langchain/docs/integrations/toolkits/airbyte_structured_qa/": {
    "canonical": "/langchain/docs/integrations/document_loaders/airbyte/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/airbyte_structured_qa/"
    ]
  },
  "/langchain/docs/integrations/toolkits/amadeus/": {
    "canonical": "/langchain/docs/integrations/tools/amadeus/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/amadeus/"
    ]
  },
  "/langchain/docs/integrations/toolkits/azure_ai_services/": {
    "canonical": "/langchain/docs/integrations/tools/azure_ai_services/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/azure_ai_services/"
    ]
  },
  "/langchain/docs/integrations/toolkits/azure_cognitive_services/": {
    "canonical": "/langchain/docs/integrations/tools/azure_cognitive_services/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/azure_cognitive_services/"
    ]
  },
  "/langchain/docs/integrations/toolkits/cassandra_database/": {
    "canonical": "/langchain/docs/integrations/tools/cassandra_database/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/cassandra_database/"
    ]
  },
  "/langchain/docs/integrations/toolkits/clickup/": {
    "canonical": "/langchain/docs/integrations/tools/clickup/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/clickup/"
    ]
  },
  "/langchain/docs/integrations/toolkits/cogniswitch/": {
    "canonical": "/langchain/docs/integrations/tools/cogniswitch/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/cogniswitch/"
    ]
  },
  "/langchain/docs/integrations/toolkits/connery/": {
    "canonical": "/langchain/docs/integrations/tools/connery/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/connery/"
    ]
  },
  "/langchain/docs/integrations/toolkits/csv/": {
    "canonical": "/langchain/docs/integrations/document_loaders/csv/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/csv/"
    ]
  },
  "/langchain/docs/integrations/toolkits/document_comparison_toolkit/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/integrations/toolkits/document_comparison_toolkit/"
    ]
  },
  "/langchain/docs/integrations/toolkits/github/": {
    "canonical": "/langchain/docs/integrations/tools/github/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/github/"
    ]
  },
  "/langchain/docs/integrations/toolkits/gitlab/": {
    "canonical": "/langchain/docs/integrations/tools/gitlab/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/gitlab/"
    ]
  },
  "/langchain/docs/integrations/toolkits/gmail/": {
    "canonical": "/langchain/docs/integrations/tools/gmail/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/gmail/"
    ]
  },
  "/langchain/docs/integrations/toolkits/jira/": {
    "canonical": "/langchain/docs/integrations/tools/jira/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/jira/"
    ]
  },
  "/langchain/docs/integrations/toolkits/json/": {
    "canonical": "/langchain/docs/integrations/tools/json/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/json/"
    ]
  },
  "/langchain/docs/integrations/toolkits/multion/": {
    "canonical": "/langchain/docs/integrations/tools/multion/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/multion/"
    ]
  },
  "/langchain/docs/integrations/toolkits/nasa/": {
    "canonical": "/langchain/docs/integrations/tools/nasa/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/nasa/"
    ]
  },
  "/langchain/docs/integrations/toolkits/office365/": {
    "canonical": "/langchain/docs/integrations/tools/office365/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/office365/"
    ]
  },
  "/langchain/docs/integrations/toolkits/openapi_nla/": {
    "canonical": "/langchain/docs/integrations/tools/openapi_nla/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/openapi_nla/"
    ]
  },
  "/langchain/docs/integrations/toolkits/openapi/": {
    "canonical": "/langchain/docs/integrations/tools/openapi/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/openapi/"
    ]
  },
  "/langchain/docs/integrations/toolkits/pandas/": {
    "canonical": "/langchain/docs/integrations/tools/pandas/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/pandas/"
    ]
  },
  "/langchain/docs/integrations/toolkits/playwright/": {
    "canonical": "/langchain/docs/integrations/tools/playwright/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/playwright/"
    ]
  },
  "/langchain/docs/integrations/toolkits/polygon/": {
    "canonical": "/langchain/docs/integrations/tools/polygon/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/polygon/"
    ]
  },
  "/langchain/docs/integrations/toolkits/powerbi/": {
    "canonical": "/langchain/docs/integrations/tools/powerbi/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/powerbi/"
    ]
  },
  "/langchain/docs/integrations/toolkits/python/": {
    "canonical": "/langchain/docs/integrations/tools/python/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/python/"
    ]
  },
  "/langchain/docs/integrations/toolkits/robocorp/": {
    "canonical": "/langchain/docs/integrations/tools/robocorp/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/robocorp/"
    ]
  },
  "/langchain/docs/integrations/toolkits/slack/": {
    "canonical": "/langchain/docs/integrations/tools/slack/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/slack/"
    ]
  },
  "/langchain/docs/integrations/toolkits/spark_sql/": {
    "canonical": "/langchain/docs/integrations/tools/spark_sql/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/spark_sql/"
    ]
  },
  "/langchain/docs/integrations/toolkits/spark/": {
    "canonical": "/langchain/docs/integrations/tools/spark_sql/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/spark/"
    ]
  },
  "/langchain/docs/integrations/toolkits/sql_database/": {
    "canonical": "/langchain/docs/integrations/tools/sql_database/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/sql_database/"
    ]
  },
  "/langchain/docs/integrations/toolkits/steam/": {
    "canonical": "/langchain/docs/integrations/tools/steam/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/steam/"
    ]
  },
  "/langchain/docs/integrations/toolkits/xorbits/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/integrations/toolkits/xorbits/"
    ]
  },
  "/langchain/docs/integrations/tools/apify/": {
    "canonical": "/langchain/docs/integrations/providers/apify/#utility",
    "alternative": [
      "/v0.1/docs/integrations/tools/apify/"
    ]
  },
  "/langchain/docs/integrations/tools/search_tools/": {
    "canonical": "/langchain/docs/integrations/tools/#search",
    "alternative": [
      "/v0.1/docs/integrations/tools/search_tools/"
    ]
  },
  "/langchain/docs/langsmith/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/langsmith/"
    ]
  },
  "/langchain/docs/langsmith/walkthrough/": {
    "canonical": "https://docs.smith.langchain.com/",
    "alternative": [
      "/v0.1/docs/langsmith/walkthrough/"
    ]
  },
  "/langchain/docs/modules/": {
    "canonical": "/langchain/docs/how_to/#components",
    "alternative": [
      "/v0.1/docs/modules/"
    ]
  },
  "/langchain/docs/modules/agents/": {
    "canonical": "/langchain/docs/how_to/#agents",
    "alternative": [
      "/v0.1/docs/modules/agents/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/json_agent/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/json_agent/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/openai_assistants/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/openai_assistants/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/openai_functions_agent/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/openai_functions_agent/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/openai_tools/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/openai_tools/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/react/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/react/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/self_ask_with_search/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/self_ask_with_search/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/structured_chat/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/structured_chat/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/tool_calling/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/tool_calling/"
    ]
  },
  "/langchain/docs/modules/agents/agent_types/xml_agent/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/agent_types/xml_agent/"
    ]
  },
  "/langchain/docs/modules/agents/concepts/": {
    "canonical": "https://langchain-docs-v0-3.github.io/langgraph/concepts/",
    "alternative": [
      "/v0.1/docs/modules/agents/concepts/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/agent_iter/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/agent_iter/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/agent_structured/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/agent_structured/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/custom_agent/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/custom_agent/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/handle_parsing_errors/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/handle_parsing_errors/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/intermediate_steps/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/intermediate_steps/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/max_iterations/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/max_iterations/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/max_time_limit/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/max_time_limit/"
    ]
  },
  "/langchain/docs/modules/agents/how_to/streaming/": {
    "canonical": "/langchain/docs/how_to/migrate_agent/",
    "alternative": [
      "/v0.1/docs/modules/agents/how_to/streaming/"
    ]
  },
  "/langchain/docs/modules/agents/quick_start/": {
    "canonical": "https://langchain-docs-v0-3.github.io/langgraph/",
    "alternative": [
      "/v0.1/docs/modules/agents/quick_start/"
    ]
  },
  "/langchain/docs/modules/callbacks/": {
    "canonical": "/langchain/docs/how_to/#callbacks",
    "alternative": [
      "/v0.1/docs/modules/callbacks/"
    ]
  },
  "/langchain/docs/modules/callbacks/async_callbacks/": {
    "canonical": "/langchain/docs/how_to/callbacks_async/",
    "alternative": [
      "/v0.1/docs/modules/callbacks/async_callbacks/"
    ]
  },
  "/langchain/docs/modules/callbacks/custom_callbacks/": {
    "canonical": "/langchain/docs/how_to/custom_callbacks/",
    "alternative": [
      "/v0.1/docs/modules/callbacks/custom_callbacks/"
    ]
  },
  "/langchain/docs/modules/callbacks/filecallbackhandler/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/modules/callbacks/filecallbackhandler/"
    ]
  },
  "/langchain/docs/modules/callbacks/multiple_callbacks/": {
    "canonical": "/langchain/docs/how_to/#callbacks",
    "alternative": [
      "/v0.1/docs/modules/callbacks/multiple_callbacks/"
    ]
  },
  "/langchain/docs/modules/callbacks/tags/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/modules/callbacks/tags/"
    ]
  },
  "/langchain/docs/modules/callbacks/token_counting/": {
    "canonical": "/langchain/docs/how_to/chat_token_usage_tracking/",
    "alternative": [
      "/v0.1/docs/modules/callbacks/token_counting/"
    ]
  },
  "/langchain/docs/modules/chains/": {
    "canonical": "/langchain/docs/versions/migrating_chains/",
    "alternative": [
      "/v0.1/docs/modules/chains/"
    ]
  },
  "/langchain/docs/modules/composition/": {
    "canonical": "https://langchain-docs-v0-3.github.io/langgraph/concepts/",
    "alternative": [
      "/v0.1/docs/modules/composition/"
    ]
  },
  "/langchain/docs/modules/data_connection/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/": {
    "canonical": "/langchain/docs/how_to/#document-loaders",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/csv/": {
    "canonical": "/langchain/docs/integrations/document_loaders/csv/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/csv/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/custom/": {
    "canonical": "/langchain/docs/how_to/document_loader_custom/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/custom/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/file_directory/": {
    "canonical": "/langchain/docs/how_to/document_loader_directory/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/file_directory/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/html/": {
    "canonical": "/langchain/docs/how_to/document_loader_html/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/html/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/json/": {
    "canonical": "/langchain/docs/how_to/document_loader_json/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/json/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/markdown/": {
    "canonical": "/langchain/docs/how_to/document_loader_markdown/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/markdown/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/office_file/": {
    "canonical": "/langchain/docs/how_to/document_loader_office_file/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/office_file/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_loaders/pdf/": {
    "canonical": "/langchain/docs/how_to/document_loader_pdf/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_loaders/pdf/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/": {
    "canonical": "/langchain/docs/how_to/#text-splitters",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/character_text_splitter/": {
    "canonical": "/langchain/docs/how_to/character_text_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/code_splitter/": {
    "canonical": "/langchain/docs/how_to/code_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/code_splitter/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/HTML_header_metadata/": {
    "canonical": "/langchain/docs/how_to/HTML_header_metadata_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/HTML_header_metadata/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/HTML_section_aware_splitter/": {
    "canonical": "/langchain/docs/how_to/HTML_section_aware_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/HTML_section_aware_splitter/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/markdown_header_metadata/": {
    "canonical": "/langchain/docs/how_to/markdown_header_metadata_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/recursive_json_splitter/": {
    "canonical": "/langchain/docs/how_to/recursive_json_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/recursive_json_splitter/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/recursive_text_splitter/": {
    "canonical": "/langchain/docs/how_to/recursive_text_splitter/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/semantic-chunker/": {
    "canonical": "/langchain/docs/how_to/semantic-chunker/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/semantic-chunker/"
    ]
  },
  "/langchain/docs/modules/data_connection/document_transformers/split_by_token/": {
    "canonical": "/langchain/docs/how_to/split_by_token/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/document_transformers/split_by_token/"
    ]
  },
  "/langchain/docs/modules/data_connection/indexing/": {
    "canonical": "/langchain/docs/how_to/indexing/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/indexing/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/": {
    "canonical": "/langchain/docs/how_to/#retrievers",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/contextual_compression/": {
    "canonical": "/langchain/docs/how_to/contextual_compression/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/contextual_compression/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/custom_retriever/": {
    "canonical": "/langchain/docs/how_to/custom_retriever/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/custom_retriever/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/ensemble/": {
    "canonical": "/langchain/docs/how_to/ensemble_retriever/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/ensemble/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/long_context_reorder/": {
    "canonical": "/langchain/docs/how_to/long_context_reorder/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/long_context_reorder/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/multi_vector/": {
    "canonical": "/langchain/docs/how_to/multi_vector/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/multi_vector/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/MultiQueryRetriever/": {
    "canonical": "/langchain/docs/how_to/MultiQueryRetriever/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/MultiQueryRetriever/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/parent_document_retriever/": {
    "canonical": "/langchain/docs/how_to/parent_document_retriever/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/parent_document_retriever/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/self_query/": {
    "canonical": "/langchain/docs/how_to/self_query/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/self_query/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/time_weighted_vectorstore/": {
    "canonical": "/langchain/docs/how_to/time_weighted_vectorstore/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/time_weighted_vectorstore/"
    ]
  },
  "/langchain/docs/modules/data_connection/retrievers/vectorstore/": {
    "canonical": "/langchain/docs/how_to/vectorstore_retriever/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/retrievers/vectorstore/"
    ]
  },
  "/langchain/docs/modules/data_connection/text_embedding/": {
    "canonical": "/langchain/docs/how_to/embed_text/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/text_embedding/"
    ]
  },
  "/langchain/docs/modules/data_connection/text_embedding/caching_embeddings/": {
    "canonical": "/langchain/docs/how_to/caching_embeddings/",
    "alternative": [
      "/v0.1/docs/modules/data_connection/text_embedding/caching_embeddings/"
    ]
  },
  "/langchain/docs/modules/data_connection/vectorstores/": {
    "canonical": "/langchain/docs/how_to/#vector-stores",
    "alternative": [
      "/v0.1/docs/modules/data_connection/vectorstores/"
    ]
  },
  "/langchain/docs/modules/memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/"
    ]
  },
  "/langchain/docs/modules/memory/adding_memory_chain_multiple_inputs/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/adding_memory_chain_multiple_inputs/"
    ]
  },
  "/langchain/docs/modules/memory/adding_memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/adding_memory/"
    ]
  },
  "/langchain/docs/modules/memory/agent_with_memory_in_db/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/agent_with_memory_in_db/"
    ]
  },
  "/langchain/docs/modules/memory/agent_with_memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/agent_with_memory/"
    ]
  },
  "/langchain/docs/modules/memory/chat_messages/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/chat_messages/"
    ]
  },
  "/langchain/docs/modules/memory/conversational_customization/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/conversational_customization/"
    ]
  },
  "/langchain/docs/modules/memory/custom_memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/custom_memory/"
    ]
  },
  "/langchain/docs/modules/memory/multiple_memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/multiple_memory/"
    ]
  },
  "/langchain/docs/modules/memory/types/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/"
    ]
  },
  "/langchain/docs/modules/memory/types/buffer_window/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/buffer_window/"
    ]
  },
  "/langchain/docs/modules/memory/types/buffer/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/buffer/"
    ]
  },
  "/langchain/docs/modules/memory/types/entity_summary_memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/entity_summary_memory/"
    ]
  },
  "/langchain/docs/modules/memory/types/kg/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/kg/"
    ]
  },
  "/langchain/docs/modules/memory/types/summary_buffer/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/summary_buffer/"
    ]
  },
  "/langchain/docs/modules/memory/types/summary/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/summary/"
    ]
  },
  "/langchain/docs/modules/memory/types/token_buffer/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/token_buffer/"
    ]
  },
  "/langchain/docs/modules/memory/types/vectorstore_retriever_memory/": {
    "canonical": "/langchain/docs/how_to/chatbots_memory/",
    "alternative": [
      "/v0.1/docs/modules/memory/types/vectorstore_retriever_memory/"
    ]
  },
  "/langchain/docs/modules/model_io/": {
    "canonical": "/langchain/docs/how_to/#chat-models",
    "alternative": [
      "/v0.1/docs/modules/model_io/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/": {
    "canonical": "/langchain/docs/how_to/#chat-models",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/chat_model_caching/": {
    "canonical": "/langchain/docs/how_to/chat_model_caching/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/chat_model_caching/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/custom_chat_model/": {
    "canonical": "/langchain/docs/how_to/custom_chat_model/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/custom_chat_model/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/function_calling/": {
    "canonical": "/langchain/docs/how_to/tool_calling/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/function_calling/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/logprobs/": {
    "canonical": "/langchain/docs/how_to/logprobs/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/logprobs/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/message_types/": {
    "canonical": "/langchain/docs/concepts/#messages",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/message_types/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/quick_start/": {
    "canonical": "/langchain/docs/tutorials/llm_chain/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/quick_start/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/response_metadata/": {
    "canonical": "/langchain/docs/how_to/response_metadata/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/response_metadata/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/streaming/": {
    "canonical": "/langchain/docs/how_to/streaming/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/streaming/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/structured_output/": {
    "canonical": "/langchain/docs/how_to/structured_output/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/structured_output/"
    ]
  },
  "/langchain/docs/modules/model_io/chat/token_usage_tracking/": {
    "canonical": "/langchain/docs/how_to/chat_token_usage_tracking/",
    "alternative": [
      "/v0.1/docs/modules/model_io/chat/token_usage_tracking/"
    ]
  },
  "/langchain/docs/modules/model_io/concepts/": {
    "canonical": "/langchain/docs/concepts/#chat-models",
    "alternative": [
      "/v0.1/docs/modules/model_io/concepts/"
    ]
  },
  "/langchain/docs/modules/model_io/llms/": {
    "canonical": "/langchain/docs/concepts/#llms",
    "alternative": [
      "/v0.1/docs/modules/model_io/llms/"
    ]
  },
  "/langchain/docs/modules/model_io/llms/custom_llm/": {
    "canonical": "/langchain/docs/how_to/custom_llm/",
    "alternative": [
      "/v0.1/docs/modules/model_io/llms/custom_llm/"
    ]
  },
  "/langchain/docs/modules/model_io/llms/llm_caching/": {
    "canonical": "/langchain/docs/how_to/llm_caching/",
    "alternative": [
      "/v0.1/docs/modules/model_io/llms/llm_caching/"
    ]
  },
  "/langchain/docs/modules/model_io/llms/quick_start/": {
    "canonical": "/langchain/docs/tutorials/llm_chain/",
    "alternative": [
      "/v0.1/docs/modules/model_io/llms/quick_start/"
    ]
  },
  "/langchain/docs/modules/model_io/llms/streaming_llm/": {
    "canonical": "/langchain/docs/how_to/streaming_llm/",
    "alternative": [
      "/v0.1/docs/modules/model_io/llms/streaming_llm/"
    ]
  },
  "/langchain/docs/modules/model_io/llms/token_usage_tracking/": {
    "canonical": "/langchain/docs/how_to/llm_token_usage_tracking/",
    "alternative": [
      "/v0.1/docs/modules/model_io/llms/token_usage_tracking/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/": {
    "canonical": "/langchain/docs/how_to/#output-parsers",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/custom/": {
    "canonical": "/langchain/docs/how_to/output_parser_custom/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/custom/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/quick_start/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/quick_start/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/csv/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/csv/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/datetime/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/datetime/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/enum/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/enum/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/json/": {
    "canonical": "/langchain/docs/how_to/output_parser_json/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/json/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/openai_functions/": {
    "canonical": "/langchain/docs/how_to/structured_output/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/openai_functions/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/openai_tools/": {
    "canonical": "/langchain/docs/how_to/tool_calling/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/openai_tools/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/output_fixing/": {
    "canonical": "/langchain/docs/how_to/output_parser_fixing/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/output_fixing/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/pandas_dataframe/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/pandas_dataframe/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/pydantic/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/pydantic/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/retry/": {
    "canonical": "/langchain/docs/how_to/output_parser_retry/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/retry/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/structured/": {
    "canonical": "/langchain/docs/how_to/output_parser_structured/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/structured/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/xml/": {
    "canonical": "/langchain/docs/how_to/output_parser_xml/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/xml/"
    ]
  },
  "/langchain/docs/modules/model_io/output_parsers/types/yaml/": {
    "canonical": "/langchain/docs/how_to/output_parser_yaml/",
    "alternative": [
      "/v0.1/docs/modules/model_io/output_parsers/types/yaml/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/": {
    "canonical": "/langchain/docs/how_to/#prompt-templates",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/composition/": {
    "canonical": "/langchain/docs/how_to/prompts_composition/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/composition/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/example_selectors/": {
    "canonical": "/langchain/docs/how_to/example_selectors/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/example_selectors/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/example_selectors/length_based/": {
    "canonical": "/langchain/docs/how_to/example_selectors_length_based/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/example_selectors/length_based/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/example_selectors/mmr/": {
    "canonical": "/langchain/docs/how_to/example_selectors_mmr/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/example_selectors/mmr/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/example_selectors/ngram_overlap/": {
    "canonical": "/langchain/docs/how_to/example_selectors_ngram/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/example_selectors/ngram_overlap/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/example_selectors/similarity/": {
    "canonical": "/langchain/docs/how_to/example_selectors_similarity/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/example_selectors/similarity/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/few_shot_examples_chat/": {
    "canonical": "/langchain/docs/how_to/few_shot_examples_chat/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/few_shot_examples_chat/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/few_shot_examples/": {
    "canonical": "/langchain/docs/how_to/few_shot_examples/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/few_shot_examples/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/partial/": {
    "canonical": "/langchain/docs/how_to/prompts_partial/",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/partial/"
    ]
  },
  "/langchain/docs/modules/model_io/prompts/quick_start/": {
    "canonical": "/langchain/docs/how_to/#prompt-templates",
    "alternative": [
      "/v0.1/docs/modules/model_io/prompts/quick_start/"
    ]
  },
  "/langchain/docs/modules/model_io/quick_start/": {
    "canonical": "/langchain/docs/tutorials/llm_chain/",
    "alternative": [
      "/v0.1/docs/modules/model_io/quick_start/"
    ]
  },
  "/langchain/docs/modules/tools/": {
    "canonical": "/langchain/docs/how_to/#tools",
    "alternative": [
      "/v0.1/docs/modules/tools/"
    ]
  },
  "/langchain/docs/modules/tools/custom_tools/": {
    "canonical": "/langchain/docs/how_to/custom_tools/",
    "alternative": [
      "/v0.1/docs/modules/tools/custom_tools/"
    ]
  },
  "/langchain/docs/modules/tools/toolkits/": {
    "canonical": "/langchain/docs/how_to/#tools",
    "alternative": [
      "/v0.1/docs/modules/tools/toolkits/"
    ]
  },
  "/langchain/docs/modules/tools/tools_as_openai_functions/": {
    "canonical": "/langchain/docs/how_to/tool_calling/",
    "alternative": [
      "/v0.1/docs/modules/tools/tools_as_openai_functions/"
    ]
  },
  "/langchain/docs/packages/": {
    "canonical": "/langchain/docs/versions/release_policy/",
    "alternative": [
      "/v0.1/docs/packages/"
    ]
  },
  "/langchain/docs/templates/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/"
    ]
  },
  "/langchain/docs/templates/anthropic-iterative-search/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/anthropic-iterative-search/"
    ]
  },
  "/langchain/docs/templates/basic-critique-revise/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/basic-critique-revise/"
    ]
  },
  "/langchain/docs/templates/bedrock-jcvd/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/bedrock-jcvd/"
    ]
  },
  "/langchain/docs/templates/cassandra-entomology-rag/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/cassandra-entomology-rag/"
    ]
  },
  "/langchain/docs/templates/cassandra-synonym-caching/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/cassandra-synonym-caching/"
    ]
  },
  "/langchain/docs/templates/chain-of-note-wiki/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/chain-of-note-wiki/"
    ]
  },
  "/langchain/docs/templates/chat-bot-feedback/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/chat-bot-feedback/"
    ]
  },
  "/langchain/docs/templates/cohere-librarian/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/cohere-librarian/"
    ]
  },
  "/langchain/docs/templates/csv-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/csv-agent/"
    ]
  },
  "/langchain/docs/templates/elastic-query-generator/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/elastic-query-generator/"
    ]
  },
  "/langchain/docs/templates/extraction-anthropic-functions/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/extraction-anthropic-functions/"
    ]
  },
  "/langchain/docs/templates/extraction-openai-functions/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/extraction-openai-functions/"
    ]
  },
  "/langchain/docs/templates/gemini-functions-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/gemini-functions-agent/"
    ]
  },
  "/langchain/docs/templates/guardrails-output-parser/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/guardrails-output-parser/"
    ]
  },
  "/langchain/docs/templates/hybrid-search-weaviate/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/hybrid-search-weaviate/"
    ]
  },
  "/langchain/docs/templates/hyde/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/hyde/"
    ]
  },
  "/langchain/docs/templates/intel-rag-xeon/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/intel-rag-xeon/"
    ]
  },
  "/langchain/docs/templates/llama2-functions/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/llama2-functions/"
    ]
  },
  "/langchain/docs/templates/mongo-parent-document-retrieval/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/mongo-parent-document-retrieval/"
    ]
  },
  "/langchain/docs/templates/neo4j-advanced-rag/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-advanced-rag/"
    ]
  },
  "/langchain/docs/templates/neo4j-cypher-ft/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-cypher-ft/"
    ]
  },
  "/langchain/docs/templates/neo4j-cypher-memory/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-cypher-memory/"
    ]
  },
  "/langchain/docs/templates/neo4j-cypher/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-cypher/"
    ]
  },
  "/langchain/docs/templates/neo4j-generation/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-generation/"
    ]
  },
  "/langchain/docs/templates/neo4j-parent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-parent/"
    ]
  },
  "/langchain/docs/templates/neo4j-semantic-layer/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-semantic-layer/"
    ]
  },
  "/langchain/docs/templates/neo4j-semantic-ollama/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-semantic-ollama/"
    ]
  },
  "/langchain/docs/templates/neo4j-vector-memory/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/neo4j-vector-memory/"
    ]
  },
  "/langchain/docs/templates/nvidia-rag-canonical/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/nvidia-rag-canonical/"
    ]
  },
  "/langchain/docs/templates/openai-functions-agent-gmail/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/openai-functions-agent-gmail/"
    ]
  },
  "/langchain/docs/templates/openai-functions-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/openai-functions-agent/"
    ]
  },
  "/langchain/docs/templates/openai-functions-tool-retrieval-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/openai-functions-tool-retrieval-agent/"
    ]
  },
  "/langchain/docs/templates/pii-protected-chatbot/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/pii-protected-chatbot/"
    ]
  },
  "/langchain/docs/templates/pirate-speak-configurable/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/pirate-speak-configurable/"
    ]
  },
  "/langchain/docs/templates/pirate-speak/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/pirate-speak/"
    ]
  },
  "/langchain/docs/templates/plate-chain/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/plate-chain/"
    ]
  },
  "/langchain/docs/templates/propositional-retrieval/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/propositional-retrieval/"
    ]
  },
  "/langchain/docs/templates/python-lint/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/python-lint/"
    ]
  },
  "/langchain/docs/templates/rag-astradb/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-astradb/"
    ]
  },
  "/langchain/docs/templates/rag-aws-bedrock/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-aws-bedrock/"
    ]
  },
  "/langchain/docs/templates/rag-aws-kendra/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-aws-kendra/"
    ]
  },
  "/langchain/docs/templates/rag-azure-search/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-azure-search/"
    ]
  },
  "/langchain/docs/templates/rag-chroma-multi-modal-multi-vector/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-chroma-multi-modal-multi-vector/"
    ]
  },
  "/langchain/docs/templates/rag-chroma-multi-modal/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-chroma-multi-modal/"
    ]
  },
  "/langchain/docs/templates/rag-chroma-private/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-chroma-private/"
    ]
  },
  "/langchain/docs/templates/rag-chroma/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-chroma/"
    ]
  },
  "/langchain/docs/templates/rag-codellama-fireworks/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-codellama-fireworks/"
    ]
  },
  "/langchain/docs/templates/rag-conversation-zep/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-conversation-zep/"
    ]
  },
  "/langchain/docs/templates/rag-conversation/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-conversation/"
    ]
  },
  "/langchain/docs/templates/rag-elasticsearch/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-elasticsearch/"
    ]
  },
  "/langchain/docs/templates/rag-fusion/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-fusion/"
    ]
  },
  "/langchain/docs/templates/rag-gemini-multi-modal/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-gemini-multi-modal/"
    ]
  },
  "/langchain/docs/templates/rag-google-cloud-sensitive-data-protection/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-google-cloud-sensitive-data-protection/"
    ]
  },
  "/langchain/docs/templates/rag-google-cloud-vertexai-search/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-google-cloud-vertexai-search/"
    ]
  },
  "/langchain/docs/templates/rag-gpt-crawler/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-gpt-crawler/"
    ]
  },
  "/langchain/docs/templates/rag-jaguardb/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-jaguardb/"
    ]
  },
  "/langchain/docs/templates/rag-lancedb/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-lancedb/"
    ]
  },
  "/langchain/docs/templates/rag-lantern/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-lantern/"
    ]
  },
  "/langchain/docs/templates/rag-matching-engine/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-matching-engine/"
    ]
  },
  "/langchain/docs/templates/rag-momento-vector-index/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-momento-vector-index/"
    ]
  },
  "/langchain/docs/templates/rag-mongo/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-mongo/"
    ]
  },
  "/langchain/docs/templates/rag-multi-index-fusion/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-multi-index-fusion/"
    ]
  },
  "/langchain/docs/templates/rag-multi-index-router/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-multi-index-router/"
    ]
  },
  "/langchain/docs/templates/rag-multi-modal-local/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-multi-modal-local/"
    ]
  },
  "/langchain/docs/templates/rag-multi-modal-mv-local/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-multi-modal-mv-local/"
    ]
  },
  "/langchain/docs/templates/rag-ollama-multi-query/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-ollama-multi-query/"
    ]
  },
  "/langchain/docs/templates/rag-opensearch/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-opensearch/"
    ]
  },
  "/langchain/docs/templates/rag-pinecone-multi-query/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-pinecone-multi-query/"
    ]
  },
  "/langchain/docs/templates/rag-pinecone-rerank/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-pinecone-rerank/"
    ]
  },
  "/langchain/docs/templates/rag-pinecone/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-pinecone/"
    ]
  },
  "/langchain/docs/templates/rag-redis-multi-modal-multi-vector/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-redis-multi-modal-multi-vector/"
    ]
  },
  "/langchain/docs/templates/rag-redis/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-redis/"
    ]
  },
  "/langchain/docs/templates/rag-self-query/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-self-query/"
    ]
  },
  "/langchain/docs/templates/rag-semi-structured/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-semi-structured/"
    ]
  },
  "/langchain/docs/templates/rag-singlestoredb/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-singlestoredb/"
    ]
  },
  "/langchain/docs/templates/rag-supabase/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-supabase/"
    ]
  },
  "/langchain/docs/templates/rag-timescale-conversation/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-timescale-conversation/"
    ]
  },
  "/langchain/docs/templates/rag-timescale-hybrid-search-time/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-timescale-hybrid-search-time/"
    ]
  },
  "/langchain/docs/templates/rag-vectara-multiquery/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-vectara-multiquery/"
    ]
  },
  "/langchain/docs/templates/rag-vectara/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-vectara/"
    ]
  },
  "/langchain/docs/templates/rag-weaviate/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rag-weaviate/"
    ]
  },
  "/langchain/docs/templates/research-assistant/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/research-assistant/"
    ]
  },
  "/langchain/docs/templates/retrieval-agent-fireworks/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/retrieval-agent-fireworks/"
    ]
  },
  "/langchain/docs/templates/retrieval-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/retrieval-agent/"
    ]
  },
  "/langchain/docs/templates/rewrite-retrieve-read/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/rewrite-retrieve-read/"
    ]
  },
  "/langchain/docs/templates/robocorp-action-server/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/robocorp-action-server/"
    ]
  },
  "/langchain/docs/templates/self-query-qdrant/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/self-query-qdrant/"
    ]
  },
  "/langchain/docs/templates/self-query-supabase/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/self-query-supabase/"
    ]
  },
  "/langchain/docs/templates/shopping-assistant/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/shopping-assistant/"
    ]
  },
  "/langchain/docs/templates/skeleton-of-thought/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/skeleton-of-thought/"
    ]
  },
  "/langchain/docs/templates/solo-performance-prompting-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/solo-performance-prompting-agent/"
    ]
  },
  "/langchain/docs/templates/sql-llama2/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/sql-llama2/"
    ]
  },
  "/langchain/docs/templates/sql-llamacpp/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/sql-llamacpp/"
    ]
  },
  "/langchain/docs/templates/sql-ollama/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/sql-ollama/"
    ]
  },
  "/langchain/docs/templates/sql-pgvector/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/sql-pgvector/"
    ]
  },
  "/langchain/docs/templates/sql-research-assistant/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/sql-research-assistant/"
    ]
  },
  "/langchain/docs/templates/stepback-qa-prompting/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/stepback-qa-prompting/"
    ]
  },
  "/langchain/docs/templates/summarize-anthropic/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/summarize-anthropic/"
    ]
  },
  "/langchain/docs/templates/vertexai-chuck-norris/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/vertexai-chuck-norris/"
    ]
  },
  "/langchain/docs/templates/xml-agent/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/templates/xml-agent/"
    ]
  },
  "/langchain/docs/use_cases/": {
    "canonical": "/langchain/docs/tutorials/",
    "alternative": [
      "/v0.1/docs/use_cases/"
    ]
  },
  "/langchain/docs/use_cases/apis/": {
    "canonical": null,
    "alternative": [
      "/v0.1/docs/use_cases/apis/"
    ]
  },
  "/langchain/docs/use_cases/chatbots/": {
    "canonical": "/langchain/docs/tutorials/chatbot/",
    "alternative": [
      "/v0.1/docs/use_cases/chatbots/"
    ]
  },
  "/langchain/docs/use_cases/chatbots/memory_management/": {
    "canonical": "/langchain/docs/tutorials/chatbot/",
    "alternative": [
      "/v0.1/docs/use_cases/chatbots/memory_management/"
    ]
  },
  "/langchain/docs/use_cases/chatbots/quickstart/": {
    "canonical": "/langchain/docs/tutorials/chatbot/",
    "alternative": [
      "/v0.1/docs/use_cases/chatbots/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/chatbots/retrieval/": {
    "canonical": "/langchain/docs/tutorials/chatbot/",
    "alternative": [
      "/v0.1/docs/use_cases/chatbots/retrieval/"
    ]
  },
  "/langchain/docs/use_cases/chatbots/tool_usage/": {
    "canonical": "/langchain/docs/tutorials/chatbot/",
    "alternative": [
      "/v0.1/docs/use_cases/chatbots/tool_usage/"
    ]
  },
  "/langchain/docs/use_cases/code_understanding/": {
    "canonical": "https://langchain-docs-v0-3.github.io/langgraph/tutorials/code_assistant/langgraph_code_assistant/",
    "alternative": [
      "/v0.1/docs/use_cases/code_understanding/"
    ]
  },
  "/langchain/docs/use_cases/data_generation/": {
    "canonical": "/langchain/docs/tutorials/data_generation/",
    "alternative": [
      "/v0.1/docs/use_cases/data_generation/"
    ]
  },
  "/langchain/docs/use_cases/extraction/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/"
    ]
  },
  "/langchain/docs/use_cases/extraction/guidelines/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/guidelines/"
    ]
  },
  "/langchain/docs/use_cases/extraction/how_to/examples/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/how_to/examples/"
    ]
  },
  "/langchain/docs/use_cases/extraction/how_to/handle_files/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/how_to/handle_files/"
    ]
  },
  "/langchain/docs/use_cases/extraction/how_to/handle_long_text/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/how_to/handle_long_text/"
    ]
  },
  "/langchain/docs/use_cases/extraction/how_to/parse/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/how_to/parse/"
    ]
  },
  "/langchain/docs/use_cases/extraction/quickstart/": {
    "canonical": "/langchain/docs/tutorials/extraction/",
    "alternative": [
      "/v0.1/docs/use_cases/extraction/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/graph/": {
    "canonical": "/langchain/docs/tutorials/graph/",
    "alternative": [
      "/v0.1/docs/use_cases/graph/"
    ]
  },
  "/langchain/docs/use_cases/graph/constructing/": {
    "canonical": "/langchain/docs/tutorials/graph/",
    "alternative": [
      "/v0.1/docs/use_cases/graph/constructing/"
    ]
  },
  "/langchain/docs/use_cases/graph/mapping/": {
    "canonical": "/langchain/docs/tutorials/graph/",
    "alternative": [
      "/v0.1/docs/use_cases/graph/mapping/"
    ]
  },
  "/langchain/docs/use_cases/graph/prompting/": {
    "canonical": "/langchain/docs/tutorials/graph/",
    "alternative": [
      "/v0.1/docs/use_cases/graph/prompting/"
    ]
  },
  "/langchain/docs/use_cases/graph/quickstart/": {
    "canonical": "/langchain/docs/tutorials/graph/",
    "alternative": [
      "/v0.1/docs/use_cases/graph/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/graph/semantic/": {
    "canonical": "/langchain/docs/tutorials/graph/",
    "alternative": [
      "/v0.1/docs/use_cases/graph/semantic/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/how_to/constructing-filters/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/how_to/constructing-filters/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/how_to/few_shot/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/how_to/few_shot/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/how_to/high_cardinality/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/how_to/high_cardinality/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/how_to/multiple_queries/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/how_to/multiple_queries/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/how_to/multiple_retrievers/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/how_to/multiple_retrievers/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/how_to/no_queries/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/how_to/no_queries/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/quickstart/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/techniques/decomposition/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/techniques/decomposition/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/techniques/expansion/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/techniques/expansion/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/techniques/hyde/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/techniques/hyde/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/techniques/routing/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/techniques/routing/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/techniques/step_back/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/techniques/step_back/"
    ]
  },
  "/langchain/docs/use_cases/query_analysis/techniques/structuring/": {
    "canonical": "/langchain/docs/tutorials/query_analysis/",
    "alternative": [
      "/v0.1/docs/use_cases/query_analysis/techniques/structuring/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/chat_history/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/chat_history/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/citations/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/citations/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/conversational_retrieval_agents/": {
    "canonical": "/langchain/docs/tutorials/qa_chat_history/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/conversational_retrieval_agents/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/hybrid/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/hybrid/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/local_retrieval_qa/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/local_retrieval_qa/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/per_user/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/per_user/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/quickstart/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/sources/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/sources/"
    ]
  },
  "/langchain/docs/use_cases/question_answering/streaming/": {
    "canonical": "/langchain/docs/tutorials/rag/",
    "alternative": [
      "/v0.1/docs/use_cases/question_answering/streaming/"
    ]
  },
  "/langchain/docs/use_cases/sql/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/"
    ]
  },
  "/langchain/docs/use_cases/sql/agents/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/agents/"
    ]
  },
  "/langchain/docs/use_cases/sql/csv/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/csv/"
    ]
  },
  "/langchain/docs/use_cases/sql/large_db/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/large_db/"
    ]
  },
  "/langchain/docs/use_cases/sql/prompting/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/prompting/"
    ]
  },
  "/langchain/docs/use_cases/sql/query_checking/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/query_checking/"
    ]
  },
  "/langchain/docs/use_cases/sql/quickstart/": {
    "canonical": "/langchain/docs/tutorials/sql_qa/",
    "alternative": [
      "/v0.1/docs/use_cases/sql/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/summarization/": {
    "canonical": "/langchain/docs/tutorials/summarization/",
    "alternative": [
      "/v0.1/docs/use_cases/summarization/"
    ]
  },
  "/langchain/docs/use_cases/tagging/": {
    "canonical": "/langchain/docs/tutorials/classification/",
    "alternative": [
      "/v0.1/docs/use_cases/tagging/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/agents/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/agents/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/human_in_the_loop/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/human_in_the_loop/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/multiple_tools/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/multiple_tools/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/parallel/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/parallel/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/prompting/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/prompting/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/quickstart/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/quickstart/"
    ]
  },
  "/langchain/docs/use_cases/tool_use/tool_error_handling/": {
    "canonical": "/langchain/docs/tutorials/agents/",
    "alternative": [
      "/v0.1/docs/use_cases/tool_use/tool_error_handling/"
    ]
  },
  "/langchain/docs/use_cases/web_scraping/": {
    "canonical": "https://langchain-docs-v0-3.github.io/langgraph/tutorials/web-navigation/web_voyager/",
    "alternative": [
      "/v0.1/docs/use_cases/web_scraping/"
    ]
  },
  // below are new
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/": {"canonical": "/langchain/docs/how_to/#text-splitters", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/character_text_splitter/": {"canonical": "/langchain/docs/how_to/character_text_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/code_splitter/": {"canonical": "/langchain/docs/how_to/code_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/code_splitter/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/HTML_header_metadata/": {"canonical": "/langchain/docs/how_to/HTML_header_metadata_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/HTML_header_metadata/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/HTML_section_aware_splitter/": {"canonical": "/langchain/docs/how_to/HTML_section_aware_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/HTML_section_aware_splitter/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/markdown_header_metadata/": {"canonical": "/langchain/docs/how_to/markdown_header_metadata_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/recursive_json_splitter/": {"canonical": "/langchain/docs/how_to/recursive_json_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/recursive_json_splitter/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter/": {"canonical": "/langchain/docs/how_to/recursive_text_splitter/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/semantic-chunker/": {"canonical": "/langchain/docs/how_to/semantic-chunker/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/semantic-chunker/"]},
  "/langchain/docs/modules/data_connection/document_transformers/text_splitters/split_by_token/": {"canonical": "/langchain/docs/how_to/split_by_token/", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/split_by_token/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/composition/": {"canonical": "/langchain/docs/how_to/prompts_composition/", "alternative": ["/v0.1/docs/modules/model_io/prompts/composition/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/example_selectors/": {"canonical": "/langchain/docs/how_to/example_selectors/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/example_selectors/length_based/": {"canonical": "/langchain/docs/how_to/example_selectors_length_based/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/length_based/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/example_selectors/mmr/": {"canonical": "/langchain/docs/how_to/example_selectors_mmr/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/mmr/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/example_selectors/ngram_overlap/": {"canonical": "/langchain/docs/how_to/example_selectors_ngram/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/ngram_overlap/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/example_selectors/similarity/": {"canonical": "/langchain/docs/how_to/example_selectors_similarity/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/similarity/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/few_shot_examples_chat/": {"canonical": "/langchain/docs/how_to/few_shot_examples_chat/", "alternative": ["/v0.1/docs/modules/model_io/prompts/few_shot_examples_chat/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/few_shot_examples/": {"canonical": "/langchain/docs/how_to/few_shot_examples/", "alternative": ["/v0.1/docs/modules/model_io/prompts/few_shot_examples/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/partial/": {"canonical": "/langchain/docs/how_to/prompts_partial/", "alternative": ["/v0.1/docs/modules/model_io/prompts/partial/"]},
  "/langchain/docs/modules/model_io/prompts/prompt_templates/quick_start/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/quick_start/"]},
  "/langchain/docs/modules/model_io/models/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/"]},
  "/langchain/docs/modules/model_io/models/chat/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/chat/"]},
  "/langchain/docs/modules/model_io/models/chat/chat_model_caching/": {"canonical": "/langchain/docs/how_to/chat_model_caching/", "alternative": ["/v0.1/docs/modules/model_io/chat/chat_model_caching/"]},
  "/langchain/docs/modules/model_io/models/chat/custom_chat_model/": {"canonical": "/langchain/docs/how_to/custom_chat_model/", "alternative": ["/v0.1/docs/modules/model_io/chat/custom_chat_model/"]},
  "/langchain/docs/modules/model_io/models/chat/function_calling/": {"canonical": "/langchain/docs/how_to/tool_calling/", "alternative": ["/v0.1/docs/modules/model_io/chat/function_calling/"]},
  "/langchain/docs/modules/model_io/models/chat/logprobs/": {"canonical": "/langchain/docs/how_to/logprobs/", "alternative": ["/v0.1/docs/modules/model_io/chat/logprobs/"]},
  "/langchain/docs/modules/model_io/models/chat/message_types/": {"canonical": "/langchain/docs/concepts/#messages", "alternative": ["/v0.1/docs/modules/model_io/chat/message_types/"]},
  "/langchain/docs/modules/model_io/models/chat/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/chat/quick_start/"]},
  "/langchain/docs/modules/model_io/models/chat/response_metadata/": {"canonical": "/langchain/docs/how_to/response_metadata/", "alternative": ["/v0.1/docs/modules/model_io/chat/response_metadata/"]},
  "/langchain/docs/modules/model_io/models/chat/streaming/": {"canonical": "/langchain/docs/how_to/streaming/", "alternative": ["/v0.1/docs/modules/model_io/chat/streaming/"]},
  "/langchain/docs/modules/model_io/models/chat/structured_output/": {"canonical": "/langchain/docs/how_to/structured_output/", "alternative": ["/v0.1/docs/modules/model_io/chat/structured_output/"]},
  "/langchain/docs/modules/model_io/models/chat/token_usage_tracking/": {"canonical": "/langchain/docs/how_to/chat_token_usage_tracking/", "alternative": ["/v0.1/docs/modules/model_io/chat/token_usage_tracking/"]},
  "/langchain/docs/modules/model_io/models/concepts/": {"canonical": "/langchain/docs/concepts/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/concepts/"]},
  "/langchain/docs/modules/model_io/models/llms/": {"canonical": "/langchain/docs/concepts/#llms", "alternative": ["/v0.1/docs/modules/model_io/llms/"]},
  "/langchain/docs/modules/model_io/models/llms/custom_llm/": {"canonical": "/langchain/docs/how_to/custom_llm/", "alternative": ["/v0.1/docs/modules/model_io/llms/custom_llm/"]},
  "/langchain/docs/modules/model_io/models/llms/llm_caching/": {"canonical": "/langchain/docs/how_to/llm_caching/", "alternative": ["/v0.1/docs/modules/model_io/llms/llm_caching/"]},
  "/langchain/docs/modules/model_io/models/llms/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/llms/quick_start/"]},
  "/langchain/docs/modules/model_io/models/llms/streaming_llm/": {"canonical": "/langchain/docs/how_to/streaming_llm/", "alternative": ["/v0.1/docs/modules/model_io/llms/streaming_llm/"]},
  "/langchain/docs/modules/model_io/models/llms/token_usage_tracking/": {"canonical": "/langchain/docs/how_to/llm_token_usage_tracking/", "alternative": ["/v0.1/docs/modules/model_io/llms/token_usage_tracking/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/": {"canonical": "/langchain/docs/how_to/#output-parsers", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/custom/": {"canonical": "/langchain/docs/how_to/output_parser_custom/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/custom/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/quick_start/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/quick_start/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/csv/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/csv/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/datetime/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/datetime/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/enum/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/enum/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/json/": {"canonical": "/langchain/docs/how_to/output_parser_json/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/json/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/openai_functions/": {"canonical": "/langchain/docs/how_to/structured_output/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/openai_functions/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/openai_tools/": {"canonical": "/langchain/docs/how_to/tool_calling/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/openai_tools/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/output_fixing/": {"canonical": "/langchain/docs/how_to/output_parser_fixing/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/output_fixing/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/pandas_dataframe/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/pandas_dataframe/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/pydantic/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/pydantic/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/retry/": {"canonical": "/langchain/docs/how_to/output_parser_retry/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/retry/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/structured/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/structured/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/xml/": {"canonical": "/langchain/docs/how_to/output_parser_xml/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/xml/"]},
  "/langchain/docs/modules/model_io/models/output_parsers/types/yaml/": {"canonical": "/langchain/docs/how_to/output_parser_yaml/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/yaml/"]},
  "/langchain/docs/modules/model_io/models/prompts/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/"]},
  "/langchain/docs/modules/model_io/models/prompts/composition/": {"canonical": "/langchain/docs/how_to/prompts_composition/", "alternative": ["/v0.1/docs/modules/model_io/prompts/composition/"]},
  "/langchain/docs/modules/model_io/models/prompts/example_selectors/": {"canonical": "/langchain/docs/how_to/example_selectors/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/"]},
  "/langchain/docs/modules/model_io/models/prompts/example_selectors/length_based/": {"canonical": "/langchain/docs/how_to/example_selectors_length_based/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/length_based/"]},
  "/langchain/docs/modules/model_io/models/prompts/example_selectors/mmr/": {"canonical": "/langchain/docs/how_to/example_selectors_mmr/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/mmr/"]},
  "/langchain/docs/modules/model_io/models/prompts/example_selectors/ngram_overlap/": {"canonical": "/langchain/docs/how_to/example_selectors_ngram/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/ngram_overlap/"]},
  "/langchain/docs/modules/model_io/models/prompts/example_selectors/similarity/": {"canonical": "/langchain/docs/how_to/example_selectors_similarity/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/similarity/"]},
  "/langchain/docs/modules/model_io/models/prompts/few_shot_examples_chat/": {"canonical": "/langchain/docs/how_to/few_shot_examples_chat/", "alternative": ["/v0.1/docs/modules/model_io/prompts/few_shot_examples_chat/"]},
  "/langchain/docs/modules/model_io/models/prompts/few_shot_examples/": {"canonical": "/langchain/docs/how_to/few_shot_examples/", "alternative": ["/v0.1/docs/modules/model_io/prompts/few_shot_examples/"]},
  "/langchain/docs/modules/model_io/models/prompts/partial/": {"canonical": "/langchain/docs/how_to/prompts_partial/", "alternative": ["/v0.1/docs/modules/model_io/prompts/partial/"]},
  "/langchain/docs/modules/model_io/models/prompts/quick_start/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/quick_start/"]},
  "/langchain/docs/modules/model_io/models/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/quick_start/"]},
  "/langchain/docs/use_cases/more/graph/": {"canonical": "/langchain/docs/tutorials/graph/", "alternative": ["/v0.1/docs/use_cases/graph/"]},
  "/langchain/docs/use_cases/more/graph/constructing/": {"canonical": "/langchain/docs/tutorials/graph/", "alternative": ["/v0.1/docs/use_cases/graph/constructing/"]},
  "/langchain/docs/use_cases/more/graph/mapping/": {"canonical": "/langchain/docs/tutorials/graph/", "alternative": ["/v0.1/docs/use_cases/graph/mapping/"]},
  "/langchain/docs/use_cases/more/graph/prompting/": {"canonical": "/langchain/docs/tutorials/graph/", "alternative": ["/v0.1/docs/use_cases/graph/prompting/"]},
  "/langchain/docs/use_cases/more/graph/quickstart/": {"canonical": "/langchain/docs/tutorials/graph/", "alternative": ["/v0.1/docs/use_cases/graph/quickstart/"]},
  "/langchain/docs/use_cases/more/graph/semantic/": {"canonical": "/langchain/docs/tutorials/graph/", "alternative": ["/v0.1/docs/use_cases/graph/semantic/"]},
  "/langchain/docs/modules/model_io/chat/how_to/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/chat/"]},
  "/langchain/docs/modules/model_io/chat/how_to/chat_model_caching/": {"canonical": "/langchain/docs/how_to/chat_model_caching/", "alternative": ["/v0.1/docs/modules/model_io/chat/chat_model_caching/"]},
  "/langchain/docs/modules/model_io/chat/how_to/custom_chat_model/": {"canonical": "/langchain/docs/how_to/custom_chat_model/", "alternative": ["/v0.1/docs/modules/model_io/chat/custom_chat_model/"]},
  "/langchain/docs/modules/model_io/chat/how_to/function_calling/": {"canonical": "/langchain/docs/how_to/tool_calling/", "alternative": ["/v0.1/docs/modules/model_io/chat/function_calling/"]},
  "/langchain/docs/modules/model_io/chat/how_to/logprobs/": {"canonical": "/langchain/docs/how_to/logprobs/", "alternative": ["/v0.1/docs/modules/model_io/chat/logprobs/"]},
  "/langchain/docs/modules/model_io/chat/how_to/message_types/": {"canonical": "/langchain/docs/concepts/#messages", "alternative": ["/v0.1/docs/modules/model_io/chat/message_types/"]},
  "/langchain/docs/modules/model_io/chat/how_to/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/chat/quick_start/"]},
  "/langchain/docs/modules/model_io/chat/how_to/response_metadata/": {"canonical": "/langchain/docs/how_to/response_metadata/", "alternative": ["/v0.1/docs/modules/model_io/chat/response_metadata/"]},
  "/langchain/docs/modules/model_io/chat/how_to/streaming/": {"canonical": "/langchain/docs/how_to/streaming/", "alternative": ["/v0.1/docs/modules/model_io/chat/streaming/"]},
  "/langchain/docs/modules/model_io/chat/how_to/structured_output/": {"canonical": "/langchain/docs/how_to/structured_output/", "alternative": ["/v0.1/docs/modules/model_io/chat/structured_output/"]},
  "/langchain/docs/modules/model_io/chat/how_to/token_usage_tracking/": {"canonical": "/langchain/docs/how_to/chat_token_usage_tracking/", "alternative": ["/v0.1/docs/modules/model_io/chat/token_usage_tracking/"]},
  "/langchain/docs/modules/model_io/llms/how_to/": {"canonical": "/langchain/docs/concepts/#llms", "alternative": ["/v0.1/docs/modules/model_io/llms/"]},
  "/langchain/docs/modules/model_io/llms/how_to/custom_llm/": {"canonical": "/langchain/docs/how_to/custom_llm/", "alternative": ["/v0.1/docs/modules/model_io/llms/custom_llm/"]},
  "/langchain/docs/modules/model_io/llms/how_to/llm_caching/": {"canonical": "/langchain/docs/how_to/llm_caching/", "alternative": ["/v0.1/docs/modules/model_io/llms/llm_caching/"]},
  "/langchain/docs/modules/model_io/llms/how_to/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/llms/quick_start/"]},
  "/langchain/docs/modules/model_io/llms/how_to/streaming_llm/": {"canonical": "/langchain/docs/how_to/streaming_llm/", "alternative": ["/v0.1/docs/modules/model_io/llms/streaming_llm/"]},
  "/langchain/docs/modules/model_io/llms/how_to/token_usage_tracking/": {"canonical": "/langchain/docs/how_to/llm_token_usage_tracking/", "alternative": ["/v0.1/docs/modules/model_io/llms/token_usage_tracking/"]},
  "/langchain/docs/modules/model_io/llms/integrations/llm_caching/": {"canonical": "/langchain/docs/how_to/llm_caching/", "alternative": ["/v0.1/docs/integrations/llms/llm_caching/"]},
  "/langchain/docs/modules/model_io/chat/integrations/ollama_functions/": {"canonical": "/langchain/docs/integrations/chat/ollama/", "alternative": ["/v0.1/docs/integrations/chat/ollama_functions/"]},
  "/en/latest/modules/models/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/"]},
  "/en/latest/modules/models/chat/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/chat/"]},
  "/en/latest/modules/models/chat/chat_model_caching/": {"canonical": "/langchain/docs/how_to/chat_model_caching/", "alternative": ["/v0.1/docs/modules/model_io/chat/chat_model_caching/"]},
  "/en/latest/modules/models/chat/custom_chat_model/": {"canonical": "/langchain/docs/how_to/custom_chat_model/", "alternative": ["/v0.1/docs/modules/model_io/chat/custom_chat_model/"]},
  "/en/latest/modules/models/chat/function_calling/": {"canonical": "/langchain/docs/how_to/tool_calling/", "alternative": ["/v0.1/docs/modules/model_io/chat/function_calling/"]},
  "/en/latest/modules/models/chat/logprobs/": {"canonical": "/langchain/docs/how_to/logprobs/", "alternative": ["/v0.1/docs/modules/model_io/chat/logprobs/"]},
  "/en/latest/modules/models/chat/message_types/": {"canonical": "/langchain/docs/concepts/#messages", "alternative": ["/v0.1/docs/modules/model_io/chat/message_types/"]},
  "/en/latest/modules/models/chat/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/chat/quick_start/"]},
  "/en/latest/modules/models/chat/response_metadata/": {"canonical": "/langchain/docs/how_to/response_metadata/", "alternative": ["/v0.1/docs/modules/model_io/chat/response_metadata/"]},
  "/en/latest/modules/models/chat/streaming/": {"canonical": "/langchain/docs/how_to/streaming/", "alternative": ["/v0.1/docs/modules/model_io/chat/streaming/"]},
  "/en/latest/modules/models/chat/structured_output/": {"canonical": "/langchain/docs/how_to/structured_output/", "alternative": ["/v0.1/docs/modules/model_io/chat/structured_output/"]},
  "/en/latest/modules/models/chat/token_usage_tracking/": {"canonical": "/langchain/docs/how_to/chat_token_usage_tracking/", "alternative": ["/v0.1/docs/modules/model_io/chat/token_usage_tracking/"]},
  "/en/latest/modules/models/concepts/": {"canonical": "/langchain/docs/concepts/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/concepts/"]},
  "/en/latest/modules/models/llms/": {"canonical": "/langchain/docs/concepts/#llms", "alternative": ["/v0.1/docs/modules/model_io/llms/"]},
  "/en/latest/modules/models/llms/custom_llm/": {"canonical": "/langchain/docs/how_to/custom_llm/", "alternative": ["/v0.1/docs/modules/model_io/llms/custom_llm/"]},
  "/en/latest/modules/models/llms/llm_caching/": {"canonical": "/langchain/docs/how_to/llm_caching/", "alternative": ["/v0.1/docs/modules/model_io/llms/llm_caching/"]},
  "/en/latest/modules/models/llms/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/llms/quick_start/"]},
  "/en/latest/modules/models/llms/streaming_llm/": {"canonical": "/langchain/docs/how_to/streaming_llm/", "alternative": ["/v0.1/docs/modules/model_io/llms/streaming_llm/"]},
  "/en/latest/modules/models/llms/token_usage_tracking/": {"canonical": "/langchain/docs/how_to/llm_token_usage_tracking/", "alternative": ["/v0.1/docs/modules/model_io/llms/token_usage_tracking/"]},
  "/en/latest/modules/models/output_parsers/": {"canonical": "/langchain/docs/how_to/#output-parsers", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/"]},
  "/en/latest/modules/models/output_parsers/custom/": {"canonical": "/langchain/docs/how_to/output_parser_custom/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/custom/"]},
  "/en/latest/modules/models/output_parsers/quick_start/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/quick_start/"]},
  "/en/latest/modules/models/output_parsers/types/csv/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/csv/"]},
  "/en/latest/modules/models/output_parsers/types/datetime/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/datetime/"]},
  "/en/latest/modules/models/output_parsers/types/enum/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/enum/"]},
  "/en/latest/modules/models/output_parsers/types/json/": {"canonical": "/langchain/docs/how_to/output_parser_json/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/json/"]},
  "/en/latest/modules/models/output_parsers/types/openai_functions/": {"canonical": "/langchain/docs/how_to/structured_output/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/openai_functions/"]},
  "/en/latest/modules/models/output_parsers/types/openai_tools/": {"canonical": "/langchain/docs/how_to/tool_calling/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/openai_tools/"]},
  "/en/latest/modules/models/output_parsers/types/output_fixing/": {"canonical": "/langchain/docs/how_to/output_parser_fixing/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/output_fixing/"]},
  "/en/latest/modules/models/output_parsers/types/pandas_dataframe/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/pandas_dataframe/"]},
  "/en/latest/modules/models/output_parsers/types/pydantic/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/pydantic/"]},
  "/en/latest/modules/models/output_parsers/types/retry/": {"canonical": "/langchain/docs/how_to/output_parser_retry/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/retry/"]},
  "/en/latest/modules/models/output_parsers/types/structured/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/structured/"]},
  "/en/latest/modules/models/output_parsers/types/xml/": {"canonical": "/langchain/docs/how_to/output_parser_xml/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/xml/"]},
  "/en/latest/modules/models/output_parsers/types/yaml/": {"canonical": "/langchain/docs/how_to/output_parser_yaml/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/yaml/"]},
  "/en/latest/modules/models/prompts/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/"]},
  "/en/latest/modules/models/prompts/composition/": {"canonical": "/langchain/docs/how_to/prompts_composition/", "alternative": ["/v0.1/docs/modules/model_io/prompts/composition/"]},
  "/en/latest/modules/models/prompts/example_selectors/": {"canonical": "/langchain/docs/how_to/example_selectors/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/"]},
  "/en/latest/modules/models/prompts/example_selectors/length_based/": {"canonical": "/langchain/docs/how_to/example_selectors_length_based/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/length_based/"]},
  "/en/latest/modules/models/prompts/example_selectors/mmr/": {"canonical": "/langchain/docs/how_to/example_selectors_mmr/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/mmr/"]},
  "/en/latest/modules/models/prompts/example_selectors/ngram_overlap/": {"canonical": "/langchain/docs/how_to/example_selectors_ngram/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/ngram_overlap/"]},
  "/en/latest/modules/models/prompts/example_selectors/similarity/": {"canonical": "/langchain/docs/how_to/example_selectors_similarity/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/similarity/"]},
  "/en/latest/modules/models/prompts/few_shot_examples_chat/": {"canonical": "/langchain/docs/how_to/few_shot_examples_chat/", "alternative": ["/v0.1/docs/modules/model_io/prompts/few_shot_examples_chat/"]},
  "/en/latest/modules/models/prompts/few_shot_examples/": {"canonical": "/langchain/docs/how_to/few_shot_examples/", "alternative": ["/v0.1/docs/modules/model_io/prompts/few_shot_examples/"]},
  "/en/latest/modules/models/prompts/partial/": {"canonical": "/langchain/docs/how_to/prompts_partial/", "alternative": ["/v0.1/docs/modules/model_io/prompts/partial/"]},
  "/en/latest/modules/models/prompts/quick_start/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/quick_start/"]},
  "/en/latest/modules/models/quick_start/": {"canonical": "/langchain/docs/tutorials/llm_chain/", "alternative": ["/v0.1/docs/modules/model_io/quick_start/"]},
  "/langchain/docs/modules/model_io/prompts/example_selector_types/": {"canonical": "/langchain/docs/how_to/example_selectors/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/"]},
  "/langchain/docs/modules/model_io/prompts/example_selector_types/length_based/": {"canonical": "/langchain/docs/how_to/example_selectors_length_based/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/length_based/"]},
  "/langchain/docs/modules/model_io/prompts/example_selector_types/mmr/": {"canonical": "/langchain/docs/how_to/example_selectors_mmr/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/mmr/"]},
  "/langchain/docs/modules/model_io/prompts/example_selector_types/ngram_overlap/": {"canonical": "/langchain/docs/how_to/example_selectors_ngram/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/ngram_overlap/"]},
  "/langchain/docs/modules/model_io/prompts/example_selector_types/similarity/": {"canonical": "/langchain/docs/how_to/example_selectors_similarity/", "alternative": ["/v0.1/docs/modules/model_io/prompts/example_selectors/similarity/"]},
  "/langchain/docs/modules/agents/tools/": {"canonical": "/langchain/docs/how_to/#tools", "alternative": ["/v0.1/docs/modules/tools/"]},
  "/langchain/docs/modules/agents/tools/custom_tools/": {"canonical": "/langchain/docs/how_to/custom_tools/", "alternative": ["/v0.1/docs/modules/tools/custom_tools/"]},
  "/langchain/docs/modules/agents/tools/toolkits/": {"canonical": "/langchain/docs/how_to/#tools", "alternative": ["/v0.1/docs/modules/tools/toolkits/"]},
  "/langchain/docs/modules/agents/tools/tools_as_openai_functions/": {"canonical": "/langchain/docs/how_to/tool_calling/", "alternative": ["/v0.1/docs/modules/tools/tools_as_openai_functions/"]},
  "/langchain/docs/guides/deployments/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/deployments/"]},
  "/langchain/docs/guides/deployments/template_repos/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/deployments/template_repos/"]},
  "/langchain/docs/guides/evaluation/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/"]},
  "/langchain/docs/guides/evaluation/comparison/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/comparison/"]},
  "/langchain/docs/guides/evaluation/comparison/custom/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/comparison/custom/"]},
  "/langchain/docs/guides/evaluation/comparison/pairwise_embedding_distance/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/comparison/pairwise_embedding_distance/"]},
  "/langchain/docs/guides/evaluation/comparison/pairwise_string/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/comparison/pairwise_string/"]},
  "/langchain/docs/guides/evaluation/examples/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/examples/"]},
  "/langchain/docs/guides/evaluation/examples/comparisons/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/examples/comparisons/"]},
  "/langchain/docs/guides/evaluation/string/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/"]},
  "/langchain/docs/guides/evaluation/string/criteria_eval_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/criteria_eval_chain/"]},
  "/langchain/docs/guides/evaluation/string/custom/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/custom/"]},
  "/langchain/docs/guides/evaluation/string/embedding_distance/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/embedding_distance/"]},
  "/langchain/docs/guides/evaluation/string/exact_match/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/exact_match/"]},
  "/langchain/docs/guides/evaluation/string/json/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/json/"]},
  "/langchain/docs/guides/evaluation/string/regex_match/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/regex_match/"]},
  "/langchain/docs/guides/evaluation/string/scoring_eval_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/scoring_eval_chain/"]},
  "/langchain/docs/guides/evaluation/string/string_distance/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/string/string_distance/"]},
  "/langchain/docs/guides/evaluation/trajectory/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/trajectory/"]},
  "/langchain/docs/guides/evaluation/trajectory/custom/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/trajectory/custom/"]},
  "/langchain/docs/guides/evaluation/trajectory/trajectory_eval/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/trajectory/trajectory_eval/"]},
  "/langchain/docs/guides/privacy/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/"]},
  "/langchain/docs/guides/privacy/amazon_comprehend_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/amazon_comprehend_chain/"]},
  "/langchain/docs/guides/privacy/constitutional_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/constitutional_chain/"]},
  "/langchain/docs/guides/privacy/hugging_face_prompt_injection/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/hugging_face_prompt_injection/"]},
  "/langchain/docs/guides/privacy/layerup_security/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/layerup_security/"]},
  "/langchain/docs/guides/privacy/logical_fallacy_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/logical_fallacy_chain/"]},
  "/langchain/docs/guides/privacy/moderation/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/moderation/"]},
  "/langchain/docs/guides/privacy/presidio_data_anonymization/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/"]},
  "/langchain/docs/guides/privacy/presidio_data_anonymization/multi_language/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/multi_language/"]},
  "/langchain/docs/guides/privacy/presidio_data_anonymization/qa_privacy_protection/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/qa_privacy_protection/"]},
  "/langchain/docs/guides/privacy/presidio_data_anonymization/reversible/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/reversible/"]},
  "/langchain/docs/guides/safety/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/"]},
  "/langchain/docs/guides/safety/amazon_comprehend_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/amazon_comprehend_chain/"]},
  "/langchain/docs/guides/safety/constitutional_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/constitutional_chain/"]},
  "/langchain/docs/guides/safety/hugging_face_prompt_injection/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/hugging_face_prompt_injection/"]},
  "/langchain/docs/guides/safety/layerup_security/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/layerup_security/"]},
  "/langchain/docs/guides/safety/logical_fallacy_chain/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/logical_fallacy_chain/"]},
  "/langchain/docs/guides/safety/moderation/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/moderation/"]},
  "/langchain/docs/guides/safety/presidio_data_anonymization/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/"]},
  "/langchain/docs/guides/safety/presidio_data_anonymization/multi_language/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/multi_language/"]},
  "/langchain/docs/guides/safety/presidio_data_anonymization/qa_privacy_protection/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/qa_privacy_protection/"]},
  "/langchain/docs/guides/safety/presidio_data_anonymization/reversible/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/presidio_data_anonymization/reversible/"]},
  "/langchain/docs/integrations/llms/titan_takeoff_pro/": {"canonical": "/langchain/docs/integrations/llms/titan_takeoff/"},
  "/langchain/docs/integrations/providers/optimum_intel/": {"canonical": "/langchain/docs/integrations/providers/intel/"},
  "/langchain/docs/use_cases/graph/integrations/diffbot_graphtransformer/": {"canonical": "/langchain/docs/integrations/graphs/diffbot/"},
  "/langchain/docs/use_cases/graph/integrations/graph_arangodb_qa/": {"canonical": "/langchain/docs/integrations/graphs/arangodb/"},
  "/langchain/docs/use_cases/graph/integrations/graph_cypher_qa/": {"canonical": "/langchain/docs/integrations/graphs/neo4j_cypher/"},
  "/langchain/docs/use_cases/graph/integrations/graph_falkordb_qa/": {"canonical": "/langchain/docs/integrations/graphs/falkordb/"},
  "/langchain/docs/use_cases/graph/integrations/graph_gremlin_cosmosdb_qa/": {"canonical": "/langchain/docs/integrations/graphs/azure_cosmosdb_gremlin/"},
  "/langchain/docs/use_cases/graph/integrations/graph_hugegraph_qa/": {"canonical": "/langchain/docs/integrations/graphs/hugegraph/"},
  "/langchain/docs/use_cases/graph/integrations/graph_kuzu_qa/": {"canonical": "/langchain/docs/integrations/graphs/kuzu_db/"},
  "/langchain/docs/use_cases/graph/integrations/graph_memgraph_qa/": {"canonical": "/langchain/docs/integrations/graphs/memgraph/"},
  "/langchain/docs/use_cases/graph/integrations/graph_nebula_qa/": {"canonical": "/langchain/docs/integrations/graphs/nebula_graph/"},
  "/langchain/docs/use_cases/graph/integrations/graph_networkx_qa/": {"canonical": "/langchain/docs/integrations/graphs/networkx/"},
  "/langchain/docs/use_cases/graph/integrations/graph_ontotext_graphdb_qa/": {"canonical": "/langchain/docs/integrations/graphs/ontotext/"},
  "/langchain/docs/use_cases/graph/integrations/graph_sparql_qa/": {"canonical": "/langchain/docs/integrations/graphs/rdflib_sparql/"},
  "/langchain/docs/use_cases/graph/integrations/neptune_cypher_qa/": {"canonical": "/langchain/docs/integrations/graphs/amazon_neptune_open_cypher/"},
  "/langchain/docs/use_cases/graph/integrations/neptune_sparql_qa/": {"canonical": "/langchain/docs/integrations/graphs/amazon_neptune_sparql/"},
  "/langchain/docs/integrations/providers/facebook_chat/": {"canonical": "/langchain/docs/integrations/providers/facebook/"},
  "/langchain/docs/integrations/providers/facebook_faiss/": {"canonical": "/langchain/docs/integrations/providers/facebook/"},
  "/langchain/docs/integrations/memory/google_cloud_sql_mssql/": {"canonical": "/langchain/docs/integrations/memory/google_sql_mssql/"},
  "/langchain/docs/integrations/memory/google_cloud_sql_mysql/": {"canonical": "/langchain/docs/integrations/memory/google_sql_mysql/"},
  "/langchain/docs/integrations/memory/google_cloud_sql_pg/": {"canonical": "/langchain/docs/integrations/memory/google_sql_pg/"},
  "/langchain/docs/integrations/memory/google_datastore/": {"canonical": "/langchain/docs/integrations/memory/google_firestore_datastore/"},
  "/langchain/docs/integrations/llms/huggingface_textgen_inference/": {"canonical": "/langchain/docs/integrations/llms/huggingface_endpoint/"},
  "/langchain/docs/integrations/llms/huggingface_hub/": {"canonical": "/langchain/docs/integrations/llms/huggingface_endpoint/"},
  "/langchain/docs/integrations/llms/bigdl/": {"canonical": "/langchain/docs/integrations/llms/ipex_llm/"},
  "/langchain/docs/integrations/llms/watsonxllm/": {"canonical": "/langchain/docs/integrations/llms/ibm_watsonx/"},
  "/langchain/docs/integrations/llms/pai_eas_endpoint/": {"canonical": "/langchain/docs/integrations/llms/alibabacloud_pai_eas_endpoint/"},
  "/langchain/docs/integrations/vectorstores/hanavector/": {"canonical": "/langchain/docs/integrations/vectorstores/sap_hanavector/"},
  "/langchain/docs/use_cases/qa_structured/sql/": {"canonical": "/langchain/docs/tutorials/sql_qa/", "alternative": ["/v0.1/docs/use_cases/sql/"]},
  "/langchain/docs/contributing/packages/": {"canonical": "/langchain/docs/versions/release_policy/", "alternative": ["/v0.1/docs/packages/"]},
  "/langchain/docs/community/": {"canonical": "/langchain/docs/contributing/"},
  "/langchain/docs/modules/chains/(.+)/": {"canonical": "/langchain/docs/versions/migrating_chains/", "alternative": ["/v0.1/docs/modules/chains/"]},
  "/langchain/docs/modules/agents/how_to/custom_llm_agent/": {"canonical": "/langchain/docs/how_to/migrate_agent/", "alternative": ["/v0.1/docs/modules/agents/how_to/custom_agent/"]},
  "/langchain/docs/modules/agents/how_to/custom-functions-with-openai-functions-agent/": {"canonical": "/langchain/docs/how_to/migrate_agent/", "alternative": ["/v0.1/docs/modules/agents/how_to/custom_agent/"]},
  "/langchain/docs/modules/agents/how_to/custom_llm_chat_agent/": {"canonical": "/langchain/docs/how_to/migrate_agent/", "alternative": ["/v0.1/docs/modules/agents/how_to/custom_agent/"]},
  "/langchain/docs/modules/agents/how_to/custom_mrkl_agent/": {"canonical": "/langchain/docs/how_to/migrate_agent/", "alternative": ["/v0.1/docs/modules/agents/how_to/custom_agent/"]},
  "/langchain/docs/modules/agents/how_to/streaming_stdout_final_only/": {"canonical": "/langchain/docs/how_to/migrate_agent/", "alternative": ["/v0.1/docs/modules/agents/how_to/streaming/"]},
  "/langchain/docs/modules/model_io/prompts/prompts_pipelining/": {"canonical": "/langchain/docs/how_to/prompts_composition/", "alternative": ["/v0.1/docs/modules/model_io/prompts/composition/"]},
  "/langchain/docs/modules/model_io/output_parsers/enum/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/enum/"]},
  "/langchain/docs/modules/model_io/output_parsers/pandas_dataframe/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/pandas_dataframe/"]},
  "/langchain/docs/modules/model_io/output_parsers/structured/": {"canonical": "/langchain/docs/how_to/output_parser_structured/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/structured/"]},
  "/langchain/docs/modules/model_io/output_parsers/xml/": {"canonical": "/langchain/docs/how_to/output_parser_xml/", "alternative": ["/v0.1/docs/modules/model_io/output_parsers/types/xml/"]},
  "/langchain/docs/use_cases/question_answering/code_understanding/": {"canonical": "https://langchain-docs-v0-3.github.io/langgraph/tutorials/code_assistant/langgraph_code_assistant/", "alternative": ["/v0.1/docs/use_cases/code_understanding/"]},
  "/langchain/docs/use_cases/question_answering/document-context-aware-QA/": {"canonical": "/langchain/docs/how_to/#text-splitters", "alternative": ["/v0.1/docs/modules/data_connection/document_transformers/"]},
  "/langchain/docs/integrations/providers/alibabacloud_opensearch/": {"canonical": "/langchain/docs/integrations/providers/alibaba_cloud/"},
  "/langchain/docs/integrations/chat/pai_eas_chat_endpoint/": {"canonical": "/langchain/docs/integrations/chat/alibaba_cloud_pai_eas/"},
  "/langchain/docs/integrations/providers/tencentvectordb/": {"canonical": "/langchain/docs/integrations/providers/tencent/"},
  "/langchain/docs/integrations/chat/hunyuan/": {"canonical": "/langchain/docs/integrations/chat/tencent_hunyuan/"},
  "/langchain/docs/integrations/document_loaders/excel/": {"canonical": "/langchain/docs/integrations/document_loaders/microsoft_excel/"},
  "/langchain/docs/integrations/document_loaders/onenote/": {"canonical": "/langchain/docs/integrations/document_loaders/microsoft_onenote/"},
  "/langchain/docs/integrations/providers/aws_dynamodb/": {"canonical": "/langchain/docs/integrations/providers/aws/"},
  "/langchain/docs/integrations/providers/scann/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/toolkits/google_drive/": {"canonical": "/langchain/docs/integrations/tools/google_drive/"},
  "/langchain/docs/use_cases/question_answering/chat_vector_db/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/in_memory_question_answering/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/multi_retrieval_qa_router/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/multiple_retrieval/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/vector_db_qa/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/vector_db_text_generation/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/guides/langsmith/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/langsmith/"]},
  "/langchain/docs/guides/langsmith/walkthrough/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/langsmith/walkthrough/"]},
  "/langchain/docs/use_cases/qa_structured/integrations/sqlite/": {"canonical": "/langchain/docs/tutorials/sql_qa/", "alternative": ["/v0.1/docs/use_cases/sql/"]},
  "/langchain/docs/use_cases/more/data_generation/": {"canonical": "/langchain/docs/tutorials/data_generation/", "alternative": ["/v0.1/docs/use_cases/data_generation/"]},
  "/langchain/docs/use_cases/question_answering/how_to/chat_vector_db/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/how_to/conversational_retrieval_agents/": {"canonical": "/langchain/docs/tutorials/qa_chat_history/", "alternative": ["/v0.1/docs/use_cases/question_answering/conversational_retrieval_agents/"]},
  "/langchain/docs/use_cases/question_answering/question_answering/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/use_cases/question_answering/how_to/local_retrieval_qa/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/local_retrieval_qa/"]},
  "/langchain/docs/use_cases/question_answering/how_to/question_answering/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/modules/agents/agents/examples/mrkl_chat(.html?)/": {"canonical": "/langchain/docs/how_to/#agents", "alternative": ["/v0.1/docs/modules/agents/"]},
  "/langchain/docs/integrations/": {"canonical": "/langchain/docs/integrations/providers/"},
  "/langchain/docs/expression_language/cookbook/routing/": {"canonical": "/langchain/docs/how_to/routing/", "alternative": ["/v0.1/docs/expression_language/how_to/routing/"]},
  "/langchain/docs/guides/expression_language/": {"canonical": "/langchain/docs/how_to/#langchain-expression-language-lcel", "alternative": ["/v0.1/docs/expression_language/"]},
  "/langchain/docs/integrations/providers/amazon_api_gateway/": {"canonical": "/langchain/docs/integrations/providers/aws/"},
  "/langchain/docs/integrations/providers/huggingface/": {"canonical": "/langchain/docs/integrations/providers/huggingface/"},
  "/langchain/docs/integrations/providers/azure_blob_storage/": {"canonical": "/langchain/docs/integrations/providers/microsoft/"},
  "/langchain/docs/integrations/providers/google_vertexai_matchingengine/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/providers/aws_s3/": {"canonical": "/langchain/docs/integrations/providers/aws/"},
  "/langchain/docs/integrations/providers/azure_openai/": {"canonical": "/langchain/docs/integrations/providers/microsoft/"},
  "/langchain/docs/integrations/providers/azure_cognitive_search_/": {"canonical": "/langchain/docs/integrations/providers/microsoft/"},
  "/langchain/docs/integrations/providers/bedrock/": {"canonical": "/langchain/docs/integrations/providers/aws/"},
  "/langchain/docs/integrations/providers/google_bigquery/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/providers/google_cloud_storage/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/providers/google_drive/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/providers/google_search/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/providers/microsoft_onedrive/": {"canonical": "/langchain/docs/integrations/providers/microsoft/"},
  "/langchain/docs/integrations/providers/microsoft_powerpoint/": {"canonical": "/langchain/docs/integrations/providers/microsoft/"},
  "/langchain/docs/integrations/providers/microsoft_word/": {"canonical": "/langchain/docs/integrations/providers/microsoft/"},
  "/langchain/docs/integrations/providers/sagemaker_endpoint/": {"canonical": "/langchain/docs/integrations/providers/aws/"},
  "/langchain/docs/integrations/providers/sagemaker_tracking/": {"canonical": "/langchain/docs/integrations/callbacks/sagemaker_tracking/"},
  "/langchain/docs/integrations/providers/openai/": {"canonical": "/langchain/docs/integrations/providers/openai/"},
  "/langchain/docs/integrations/cassandra/": {"canonical": "/langchain/docs/integrations/providers/cassandra/"},
  "/langchain/docs/integrations/providers/providers/semadb/": {"canonical": "/langchain/docs/integrations/providers/semadb/"},
  "/langchain/docs/integrations/vectorstores/vectorstores/semadb/": {"canonical": "/langchain/docs/integrations/vectorstores/semadb/"},
  "/langchain/docs/integrations/vectorstores/async_faiss/": {"canonical": "/langchain/docs/integrations/vectorstores/faiss_async/"},
  "/langchain/docs/integrations/vectorstores/matchingengine/": {"canonical": "/langchain/docs/integrations/vectorstores/google_vertex_ai_vector_search/"},
  "/langchain/docs/integrations/tools/sqlite/": {"canonical": "/langchain/docs/tutorials/sql_qa/", "alternative": ["/v0.1/docs/use_cases/sql/"]},
  "/langchain/docs/integrations/document_loaders/pdf-amazonTextractPDFLoader/": {"canonical": "/langchain/docs/integrations/document_loaders/amazon_textract/"},
  "/langchain/docs/integrations/document_loaders/Etherscan/": {"canonical": "/langchain/docs/integrations/document_loaders/etherscan/"},
  "/langchain/docs/integrations/document_loaders/merge_doc_loader/": {"canonical": "/langchain/docs/integrations/document_loaders/merge_doc/"},
  "/langchain/docs/integrations/document_loaders/recursive_url_loader/": {"canonical": "/langchain/docs/integrations/document_loaders/recursive_url/"},
  "/langchain/docs/integrations/providers/google_document_ai/": {"canonical": "/langchain/docs/integrations/providers/google/"},
  "/langchain/docs/integrations/memory/motorhead_memory_managed/": {"canonical": "/langchain/docs/integrations/memory/motorhead_memory/"},
  "/langchain/docs/integrations/memory/dynamodb_chat_message_history/": {"canonical": "/langchain/docs/integrations/memory/aws_dynamodb/"},
  "/langchain/docs/integrations/memory/entity_memory_with_sqlite/": {"canonical": "/langchain/docs/integrations/memory/sqlite/"},
  "/langchain/docs/modules/model_io/chat/integrations/anthropic/": {"canonical": "/langchain/docs/integrations/chat/anthropic/"},
  "/langchain/docs/modules/model_io/chat/integrations/azure_chat_openai/": {"canonical": "/langchain/docs/integrations/chat/azure_chat_openai/"},
  "/langchain/docs/modules/model_io/chat/integrations/google_vertex_ai_palm/": {"canonical": "/langchain/docs/integrations/chat/google_vertex_ai_palm/"},
  "/langchain/docs/modules/model_io/chat/integrations/openai/": {"canonical": "/langchain/docs/integrations/chat/openai/"},
  "/langchain/docs/modules/model_io/chat/integrations/promptlayer_chatopenai/": {"canonical": "/langchain/docs/integrations/chat/promptlayer_chatopenai/"},
  "/langchain/docs/modules/model_io/llms/integrations/ai21/": {"canonical": "/langchain/docs/integrations/llms/ai21/"},
  "/langchain/docs/modules/model_io/llms/integrations/aleph_alpha/": {"canonical": "/langchain/docs/integrations/llms/aleph_alpha/"},
  "/langchain/docs/modules/model_io/llms/integrations/anyscale/": {"canonical": "/langchain/docs/integrations/llms/anyscale/"},
  "/langchain/docs/modules/model_io/llms/integrations/banana/": {"canonical": "/langchain/docs/integrations/llms/banana/"},
  "/langchain/docs/modules/model_io/llms/integrations/baseten/": {"canonical": "/langchain/docs/integrations/llms/baseten/"},
  "/langchain/docs/modules/model_io/llms/integrations/beam/": {"canonical": "/langchain/docs/integrations/llms/beam/"},
  "/langchain/docs/modules/model_io/llms/integrations/bedrock/": {"canonical": "/langchain/docs/integrations/llms/bedrock/"},
  "/langchain/docs/modules/model_io/llms/integrations/cohere/": {"canonical": "/langchain/docs/integrations/llms/cohere/"},
  "/langchain/docs/modules/model_io/llms/integrations/ctransformers/": {"canonical": "/langchain/docs/integrations/llms/ctransformers/"},
  "/langchain/docs/modules/model_io/llms/integrations/databricks/": {"canonical": "/langchain/docs/integrations/llms/databricks/"},
  "/langchain/docs/modules/model_io/llms/integrations/google_vertex_ai_palm/": {"canonical": "/langchain/docs/integrations/llms/google_vertex_ai_palm/"},
  "/langchain/docs/modules/model_io/llms/integrations/huggingface_pipelines/": {"canonical": "/langchain/docs/integrations/llms/huggingface_pipelines/"},
  "/langchain/docs/modules/model_io/llms/integrations/jsonformer_experimental/": {"canonical": "/langchain/docs/integrations/llms/jsonformer_experimental/"},
  "/langchain/docs/modules/model_io/llms/integrations/llamacpp/": {"canonical": "/langchain/docs/integrations/llms/llamacpp/"},
  "/langchain/docs/modules/model_io/llms/integrations/manifest/": {"canonical": "/langchain/docs/integrations/llms/manifest/"},
  "/langchain/docs/modules/model_io/llms/integrations/modal/": {"canonical": "/langchain/docs/integrations/llms/modal/"},
  "/langchain/docs/modules/model_io/llms/integrations/mosaicml/": {"canonical": "/langchain/docs/integrations/llms/mosaicml/"},
  "/langchain/docs/modules/model_io/llms/integrations/nlpcloud/": {"canonical": "/langchain/docs/integrations/llms/nlpcloud/"},
  "/langchain/docs/modules/model_io/llms/integrations/openai/": {"canonical": "/langchain/docs/integrations/llms/openai/"},
  "/langchain/docs/modules/model_io/llms/integrations/openlm/": {"canonical": "/langchain/docs/integrations/llms/openlm/"},
  "/langchain/docs/modules/model_io/llms/integrations/predictionguard/": {"canonical": "/langchain/docs/integrations/llms/predictionguard/"},
  "/langchain/docs/modules/model_io/llms/integrations/promptlayer_openai/": {"canonical": "/langchain/docs/integrations/llms/promptlayer_openai/"},
  "/langchain/docs/modules/model_io/llms/integrations/rellm_experimental/": {"canonical": "/langchain/docs/integrations/llms/rellm_experimental/"},
  "/langchain/docs/modules/model_io/llms/integrations/replicate/": {"canonical": "/langchain/docs/integrations/llms/replicate/"},
  "/langchain/docs/modules/model_io/llms/integrations/runhouse/": {"canonical": "/langchain/docs/integrations/llms/runhouse/"},
  "/langchain/docs/modules/model_io/llms/integrations/sagemaker/": {"canonical": "/langchain/docs/integrations/llms/sagemaker/"},
  "/langchain/docs/modules/model_io/llms/integrations/stochasticai/": {"canonical": "/langchain/docs/integrations/llms/stochasticai/"},
  "/langchain/docs/modules/model_io/llms/integrations/writer/": {"canonical": "/langchain/docs/integrations/llms/writer/"},
  "/en/latest/use_cases/apis.html/": {"canonical": null, "alternative": ["/v0.1/docs/use_cases/apis/"]},
  "/en/latest/use_cases/extraction.html/": {"canonical": "/langchain/docs/tutorials/extraction/", "alternative": ["/v0.1/docs/use_cases/extraction/"]},
  "/en/latest/use_cases/summarization.html/": {"canonical": "/langchain/docs/tutorials/summarization/", "alternative": ["/v0.1/docs/use_cases/summarization/"]},
  "/en/latest/use_cases/tabular.html/": {"canonical": "/langchain/docs/tutorials/sql_qa/", "alternative": ["/v0.1/docs/use_cases/sql/"]},
  "/en/latest/youtube.html/": {"canonical": "/langchain/docs/additional_resources/youtube/"},
  "/langchain/docs/": {"canonical": "/"},
  "/en/latest/": {"canonical": "/"},
  "/en/latest/index.html/": {"canonical": "/"},
  "/en/latest/modules/models.html/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/"]},
  "/langchain/docs/integrations/retrievers/google_cloud_enterprise_search/": {"canonical": "/langchain/docs/integrations/retrievers/google_vertex_ai_search/"},
  "/langchain/docs/integrations/tools/metaphor_search/": {"canonical": "/langchain/docs/integrations/tools/exa_search/"},
  "/langchain/docs/expression_language/how_to/fallbacks/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/fallbacks/"]},
  "/langchain/docs/expression_language/cookbook/retrieval/": {"canonical": "/langchain/docs/tutorials/rag/", "alternative": ["/v0.1/docs/use_cases/question_answering/"]},
  "/langchain/docs/expression_language/cookbook/agent/": {"canonical": "/langchain/docs/how_to/migrate_agent/", "alternative": ["/v0.1/docs/modules/agents/agent_types/xml_agent/"]},
  "/langchain/docs/modules/model_io/prompts/message_prompts/": {"canonical": "/langchain/docs/how_to/#prompt-templates", "alternative": ["/v0.1/docs/modules/model_io/prompts/quick_start/"]},
  "/langchain/docs/modules/model_io/prompts/pipeline/": {"canonical": "/langchain/docs/how_to/prompts_composition/", "alternative": ["/v0.1/docs/modules/model_io/prompts/composition/"]},
  "/langchain/docs/expression_language/cookbook/memory/": {"canonical": "/langchain/docs/how_to/chatbots_memory/", "alternative": ["/v0.1/docs/modules/memory/"]},
  "/langchain/docs/expression_language/cookbook/tools/": {"canonical": "/langchain/docs/tutorials/agents/", "alternative": ["/v0.1/docs/use_cases/tool_use/quickstart/"]},
  "/langchain/docs/expression_language/cookbook/sql_db/": {"canonical": "/langchain/docs/tutorials/sql_qa/", "alternative": ["/v0.1/docs/use_cases/sql/quickstart/"]},
  "/langchain/docs/expression_language/cookbook/moderation/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/safety/moderation/"]},
  "/langchain/docs/expression_language/cookbook/embedding_router/": {"canonical": "/langchain/docs/how_to/routing/", "alternative": ["/v0.1/docs/expression_language/how_to/routing/"]},
  "/langchain/docs/guides/structured_output/": {"canonical": "/langchain/docs/how_to/structured_output/", "alternative": ["/v0.1/docs/modules/model_io/chat/structured_output/"]},
  "/langchain/docs/modules/agents/how_to/structured_tools/": {"canonical": "/langchain/docs/how_to/#tools", "alternative": ["/v0.1/docs/modules/tools/"]},
  "/langchain/docs/use_cases/csv/": {"canonical": "/langchain/docs/tutorials/sql_qa/", "alternative": ["/v0.1/docs/use_cases/sql/csv/"]},
  "/langchain/docs/guides/debugging/": {"canonical": "/langchain/docs/how_to/debugging/", "alternative": ["/v0.1/docs/guides/development/debugging/"]},
  "/langchain/docs/guides/extending_langchain/": {"canonical": "/langchain/docs/how_to/#custom", "alternative": ["/v0.1/docs/guides/development/extending_langchain/"]},
  "/langchain/docs/guides/fallbacks/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/fallbacks/"]},
  "/langchain/docs/guides/model_laboratory/": {"canonical": "https://docs.smith.langchain.com/", "alternative": ["/v0.1/docs/guides/productionization/evaluation/"]},
  "/langchain/docs/guides/pydantic_compatibility/": {"canonical": "/langchain/docs/how_to/pydantic_compatibility/", "alternative": ["/v0.1/docs/guides/development/pydantic_compatibility/"]},
  "/langchain/docs/guides/local_llms/": {"canonical": "/langchain/docs/how_to/local_llms/", "alternative": ["/v0.1/docs/guides/development/local_llms/"]},
  "/langchain/docs/modules/model_io/quick_start/": {"canonical": "/langchain/docs/how_to/#chat-models", "alternative": ["/v0.1/docs/modules/model_io/"]},
  "/langchain/docs/expression_language/how_to/generators/": {"canonical": "/langchain/docs/how_to/functions/", "alternative": ["/v0.1/docs/expression_language/primitives/functions/"]},
  "/langchain/docs/expression_language/how_to/functions/": {"canonical": "/langchain/docs/how_to/functions/", "alternative": ["/v0.1/docs/expression_language/primitives/functions/"]},
  "/langchain/docs/expression_language/how_to/passthrough/": {"canonical": "/langchain/docs/how_to/passthrough/", "alternative": ["/v0.1/docs/expression_language/primitives/passthrough/"]},
  "/langchain/docs/expression_language/how_to/map/": {"canonical": "/langchain/docs/how_to/parallel/", "alternative": ["/v0.1/docs/expression_language/primitives/parallel/"]},
  "/langchain/docs/expression_language/how_to/binding/": {"canonical": "/langchain/docs/how_to/binding/", "alternative": ["/v0.1/docs/expression_language/primitives/binding/"]},
  "/langchain/docs/expression_language/how_to/configure/": {"canonical": "/langchain/docs/how_to/configure/", "alternative": ["/v0.1/docs/expression_language/primitives/configure/"]},
  "/langchain/docs/expression_language/cookbook/prompt_llm_parser/": {"canonical": "/langchain/docs/how_to/sequence/", "alternative": ["/v0.1/docs/expression_language/get_started/"]},
  "/langchain/docs/contributing/documentation/": {"canonical": "/langchain/docs/contributing/how_to/documentation/", "alternative": ["/v0.1/docs/contributing/documentation/technical_logistics/"]},
  "/langchain/docs/expression_language/cookbook/": {"canonical": "/langchain/docs/how_to/#langchain-expression-language-lcel", "alternative": ["/v0.1/docs/expression_language/"]},
  "/langchain/docs/integrations/text_embedding/solar/": {"canonical": "/langchain/docs/integrations/text_embedding/upstage/"},
  "/langchain/docs/integrations/chat/solar/": {"canonical": "/langchain/docs/integrations/chat/upstage/"},
  // custom ones

  "/langchain/docs/modules/model_io/chat/llm_chain/": {
    "canonical": "/langchain/docs/tutorials/llm_chain/"
  },

  "/langchain/docs/modules/agents/toolkits/": {
    "canonical": "/langchain/docs/integrations/tools/",
    "alternative": [
      "/v0.1/docs/integrations/toolkits/"
    ]
  }
}
