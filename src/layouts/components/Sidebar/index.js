import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={null} />
                <MenuItem title="Following" to={config.routes.following} icon={null} />
                <MenuItem title="Live" to={config.routes.live} icon={null} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
