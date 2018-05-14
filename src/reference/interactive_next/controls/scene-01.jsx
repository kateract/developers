import * as Mixer from '@mixer/cdk-std';
import { h } from 'preact';

import { PreactScene, Translate } from './alchemy/preact';

@Mixer.Scene({ id: 'leaderboard' })
export class LeaderboardScene extends PreactScene<{}> {
    render() {
        return <div>
            <h1><Translate string="And the winners are..." /></h1>
        </div>;
    }
}
